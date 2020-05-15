import { dbWeapon } from '../database/database'
import { listType, ListType } from '../constants/ConstCalc'
import * as parameters from '../constants/ConstParameters'
import { CharInput, BuffInput, EnemyInput } from '../models/modelCalc'
import { WeaponInfo } from '../models/modelResource'
import { calcAtk } from './calcChar'

export const checkType = (weaponType: string): ListType => {
  for (let i = 0; i < listType.length; i += 1) {
    if (listType[i].name === weaponType) {
      return listType[i]
    }
  }
  return listType[0]
}

// ===============================================================================
// calculate dps for each weapon
// ===============================================================================
// 城娘の戦場配置後のステータス計算式
// 		耐久・攻撃・防禦・範囲
// 		＝(基本値×絆ボーナス×地形ボーナス＋裝備補正)×巨大化補正×最大係數の割合上昇系特技・計略補正＋全ての固定値繫上昇特技・計略補正
//
// 城プロのダメージ計算式
// 	自身の攻撃力－対象の防禦力＝ダメージ
//
// 城娘の動作に関して
// 		実行フレーム＝基本攻撃フレーム/(攻撃速度上昇割合+1)+隙フレーム/(隙速度上昇割合+1)
// 		攻撃・隙 速度上昇割合＝裝備上昇割合＋特技計略上昇割合
// 		※計算結果は小數點以下四捨五入

export const calcOutput = (
  charInput: CharInput,
  buffInput: BuffInput,
  enemyInput: EnemyInput
): WeaponInfo[] => {
  const weaponSelected: WeaponInfo[] = dbWeapon
    .chain()
    .find({ type: charInput.charType })
    .data()
  let maxMux: number = 1
  let paraMux: number = 1
  let paraMuxSub: number = 1
  let subSwitch: boolean = false
  let totalDef: number = 0
  let charAtk: number = calcAtk(charInput)
  const weaponType: ListType = checkType(charInput.charType)

  // ===============================================================
  // 地形ボーナス
  if (buffInput.buffTerrain) {
    charAtk *= parameters.muxPlain
  }

  // ===============================================================
  // 飛行敵に対する攻撃力ボーナス
  if (enemyInput.enemyFly) {
    if (charInput.charType === 'bow') {
      paraMux *= parameters.muxFlyBow
    } else {
      if (weaponType.melee) {
        paraMux *= parameters.muxFlyMelee
      }
    }
  }

  // ===============================================================
  // 妖怪敵に対する攻撃力ボーナス
  if (enemyInput.enemyMonster && weaponType.physic) {
    paraMux *= parameters.muxMonsMelee
  }

  // ===============================================================
  // 砲弾が敵に直撃した場合、攻撃力が50%アップ。
  if (charInput.charType === 'cannon') {
    paraMuxSub = paraMux
    subSwitch = true
    if (buffInput.buffDirectUp === 0) {
      paraMux *= 1 + parameters.muxCanDirect
    } else {
      paraMux *= 1 + buffInput.buffDirectUp / 100
    }
  }

  // ===============================================================
  // 巨大化補正
  maxMux = charInput.charMax

  // ===============================================================
  // 兜防禦力計算
  if (weaponType.magic) {
    totalDef = 0
  } else {
    totalDef =
      enemyInput.enemyDef *
        (1 - enemyInput.enemyDefPercent / 100) *
        (1 - buffInput.buffIgoreDef / 100) -
      enemyInput.enemyDefNumber

    if (totalDef <= 0) {
      totalDef = 0
    }
  }

  // ===============================================================
  // 設施攻擊力計算
  charAtk += charInput.charStructure

  // ===============================================================
  // ダメージ計算
  weaponSelected.map(data => {
    let pureAtk: number = 0
    let totalAtk: number = 0
    let paraMuxTemp: number = paraMux
    let paraMuxTempSub: number = paraMuxSub
    let totalAtkSub: number = 0
    let damageSub: number = 0

    // ===============================================================
    // 飛行敵に対する特殊武器攻撃力ボーナス
    if (enemyInput.enemyFly) {
      for (let i = 0; i < parameters.weaponAntiFly.length; i += 1) {
        if (parameters.weaponAntiFly[i] === data.name) {
          paraMuxTemp *= 1.5
          break
        }
      }
    }

    // ===============================================================
    // 直擊に対する特殊武器攻撃力ボーナス
    for (let i = 0; i < parameters.wepDirectUp.length; i += 1) {
      for (let j = 0; j < parameters.wepDirectUp[i].name.length; j += 1) {
        if (parameters.wepDirectUp[i].name[j] === data.name) {
          paraMuxTempSub = paraMuxTemp
          subSwitch = true
          paraMuxTemp *= 1 + parameters.wepDirectUp[i].value / 100
          break
        }
      }
    }

    pureAtk =
      (charAtk + data.atk) * maxMux * (1 + buffInput.buffAtkPercent / 100) +
      buffInput.buffAtkNumber

    totalAtk = pureAtk * paraMuxTemp

    data.damage = calcDam(
      pureAtk,
      totalAtk,
      totalDef,
      data.name,
      buffInput,
      enemyInput
    )

    // ===============================================================
    // 与ダメージに対する特殊武器攻撃力ボーナス
    for (let i = 0; i < parameters.wepAddDam.length; i += 1) {
      for (let j = 0; j < parameters.wepAddDam[i].name.length; j += 1) {
        if (parameters.wepAddDam[i].name[j] === data.name) {
          data.damage += parameters.wepAddDam[i].value
          break
        }
      }
    }

    // ===============================================================
    // 与ダメージに対する特殊武器攻撃力ボーナス
    for (let i = 0; i < parameters.wepAddAtkDam.length; i += 1) {
      for (let j = 0; j < parameters.wepAddAtkDam[i].name.length; j += 1) {
        if (parameters.wepAddAtkDam[i].name[j] === data.name) {
          data.damage += Math.floor(totalAtk * parameters.wepAddAtkDam[i].value)
          break
        }
      }
    }

    data.frame1 = Math.round(data.f1 / (1 + buffInput.buffSpeedPre / 100))
    if (buffInput.buffSpeedPost >= parameters.maxskillSpdUpB) {
      data.frame2 = 0
    } else {
      data.frame2 = Math.round(data.f2 * (1 - buffInput.buffSpeedPost / 100))
    }
    data.dps =
      Math.floor(
        ((data.damage * data.hit) / (data.frame1 + data.frame2)) *
          parameters.valueFPS *
          100
      ) / 100

    if (subSwitch) {
      totalAtkSub =
        ((charAtk + data.atk) * maxMux * (1 + buffInput.buffAtkPercent / 100) +
          buffInput.buffAtkNumber) *
        paraMuxTempSub

      damageSub = calcDam(
        pureAtk,
        totalAtkSub,
        totalDef,
        data.name,
        buffInput,
        enemyInput
      )
      subSwitch = false
    }

    data.time = calcTime(data, enemyInput, damageSub, buffInput.buffHitnumber)

    return data
  })

  dbWeapon.update(weaponSelected)

  return weaponSelected
}

export const calcDam = (
  pureAtk: number,
  totalAtk: number,
  totalDef: number,
  name: string,
  buffInput: BuffInput,
  enemyInput: EnemyInput
): number => {
  // ===============================================================
  // 敵の防御無視に対する特殊武器攻撃力ボーナス
  for (let i = 0; i < parameters.wepIgnoreDef.length; i += 1) {
    for (let j = 0; j < parameters.wepIgnoreDef[i].name.length; j += 1) {
      if (parameters.wepIgnoreDef[i].name[j] === name) {
        if (totalDef > 0) {
          let tempDef = Math.round(totalDef * parameters.wepIgnoreDef[i].value)
          return calcAtkDef(
            totalAtk,
            tempDef,
            buffInput.buffDamageUp,
            enemyInput.enemyDamageUp,
            pureAtk,
            buffInput.buffAddIgore,
            name
          )
        }
      }
    }
  }

  // ===============================================================
  // デバフ付加防禦下降に対する特殊武器攻撃力ボーナス
  for (let i = 0; i < parameters.wepDefDown.length; i += 1) {
    for (let j = 0; j < parameters.wepDefDown[i].name.length; j += 1) {
      if (parameters.wepDefDown[i].name[j] === name) {
        if (
          totalDef > 0 &&
          enemyInput.enemyDefPercent > parameters.wepDefDown[i].value
        ) {
          let tempDef =
            enemyInput.enemyDef *
              (1 - enemyInput.enemyDefPercent / 100) *
              (1 - buffInput.buffIgoreDef / 100) -
            enemyInput.enemyDefNumber

          if (tempDef <= 0) {
            tempDef = 0
          }
          return calcAtkDef(
            totalAtk,
            tempDef,
            buffInput.buffDamageUp,
            enemyInput.enemyDamageUp,
            pureAtk,
            buffInput.buffAddIgore,
            name
          )
        }
      }
    }
  }

  // ===============================================================
  // 攻撃上升に対する特殊武器攻撃力ボーナス
  for (let i = 0; i < parameters.wepAtkUp.length; i += 1) {
    for (let j = 0; j < parameters.wepAtkUp[i].name.length; j += 1) {
      if (parameters.wepAtkUp[i].name[j] === name) {
        const tempAtk = Math.round(totalAtk * parameters.wepAtkUp[i].value)
        return calcAtkDef(
          tempAtk,
          totalDef,
          buffInput.buffDamageUp,
          enemyInput.enemyDamageUp,
          pureAtk,
          buffInput.buffAddIgore,
          name
        )
      }
    }
  }

  return calcAtkDef(
    totalAtk,
    totalDef,
    buffInput.buffDamageUp,
    enemyInput.enemyDamageUp,
    pureAtk,
    buffInput.buffAddIgore,
    name
  )
}

export const calcAtkDef = (
  atk: number,
  def: number,
  skillDamUp: number,
  skillRecDamUp: number,
  pureAtk: number,
  skillAddIgnore: number,
  name: string
): number => {
  let damage: number
  if (atk - parameters.valueProDam >= def) {
    damage = Math.floor(
      Math.floor(atk - def) * (1 + skillDamUp / 100) * (1 + skillRecDamUp / 100)
    )
  } else {
    damage = Math.floor(
      parameters.valueProDam *
        (1 + skillDamUp / 100) *
        (1 + skillRecDamUp / 100)
    )
  }

  // ===============================================================
  // 与ダメージ増加に対する特殊武器攻撃力ボーナス
  for (let i = 0; i < parameters.wepDamUp.length; i += 1) {
    for (let j = 0; j < parameters.wepDamUp[i].name.length; j += 1) {
      if (parameters.wepDamUp[i].name[j] === name) {
        damage = Math.floor(damage * (1 + parameters.wepDamUp[i].value / 100))
        break
      }
    }
  }

  // ===============================================================
  // 雷擊追加ボーナス
  damage =
    damage +
    Math.floor(
      pureAtk *
        (skillAddIgnore / 100) *
        (1 + skillDamUp / 100) *
        (1 + skillRecDamUp / 100)
    )

  return damage
}

export const calcTime = (
  data: WeaponInfo,
  enemy: EnemyInput,
  damageSub: number,
  buffHitnumber: number
): number => {
  const timeDamage =
    Math.ceil(enemy.enemyHitpoint / (data.damage * data.hit)) *
    (data.frame1 + data.frame2)
  const hitnumber = data.target + buffHitnumber

  switch (data.type) {
    case 'bell':
      return Math.ceil(enemy.enemyHitpoint / data.dps) * parameters.valueFPS
    case 'cannon':
      return (
        calcCannonTime(
          data.damage,
          damageSub,
          enemy.enemyHitpoint,
          enemy.enemyNumber
        ) *
        (data.frame1 + data.frame2)
      )
    case 'dance':
      if (enemy.enemyMonster) {
        return timeDamage
      } else {
        return 0
      }
    case 'hammer':
      if (damageSub !== 0) {
        return (
          calcCannonTime(
            data.damage,
            damageSub,
            enemy.enemyHitpoint,
            enemy.enemyNumber
          ) *
          (data.frame1 + data.frame2)
        )
      } else {
        return timeDamage
      }
    default:
      if (data.target === 0) {
        return timeDamage
      } else if (hitnumber >= enemy.enemyNumber) {
        return timeDamage
      } else {
        return timeDamage * Math.ceil(enemy.enemyNumber / hitnumber)
      }
  }
}

export const calcCannonTime = (
  damage: number,
  damageSub: number,
  eHit: number,
  eNum: number
): number => {
  const loopTemp = Math.ceil(eHit / damageSub)
  const maxloop = eNum > loopTemp ? loopTemp : eNum

  let time = 0
  for (let i = 0; i < maxloop; i += 1) {
    time += Math.ceil((eHit - time * damageSub) / damage)
  }
  return time
}
