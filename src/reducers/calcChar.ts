import { dbType } from '../raw/database'
import { CharInput, WeaponType } from '../model/modelCalc'

// ===============================================================================
// calculate basic attack value for the character
// ===============================================================================
// Lv.Xでの城娘の能力値Y算出（※2017/08/08メンテ後）
//
//    計算式 … Y=INT(INT((A-B)/1000*X+B)*a)
//        A … 武器種ごとのLv.1000の基本値
//        B … 武器種ごとのLv.0の基本値
//        a … 城娘ごとの能力値係數
//    計算例：Lv.110の駿府城の攻撃の値（絆ボーナス・武器・施設は無しでの値）
//        INT(INT((1234-50)/1000*110+50)*1.10)=198

export const calcAtk = (input: CharInput): number => {
  const typeSelected: WeaponType[] = dbType
    .chain()
    .find({ name: input.charType })
    .data()

  const typeAtk: number = (typeSelected[0].atkM - typeSelected[0].atk) / 1000
  const comAtk: number = 1 + Math.floor(input.charCompanion / 10) / 100
  let charAtk: number = Math.floor(
    typeAtk * input.charLevel + typeSelected[0].atk
  )
  charAtk = Math.floor((charAtk * input.charAtkParm) / 100)
  charAtk = Math.floor(charAtk * comAtk)
  return charAtk
}

export const calcDef = (input: CharInput): number => {
  const typeSelected: WeaponType[] = dbType
    .chain()
    .find({ name: input.charType })
    .data()

  const typeDef: number = (typeSelected[0].defM - typeSelected[0].def) / 1000
  const comDef: number = 1 + Math.floor(input.charCompanion / 10) / 100
  let charDef: number = Math.floor(
    typeDef * input.charLevel + typeSelected[0].def
  )
  charDef = Math.floor((charDef * input.charDefParm) / 100)
  charDef = Math.floor(charDef * comDef)
  return charDef
}

export const calcHP = (input: CharInput): number => {
  const typeSelected: WeaponType[] = dbType
    .chain()
    .find({ name: input.charType })
    .data()

  const typeHP: number = (typeSelected[0].hpM - typeSelected[0].hp) / 1000
  const comHP: number = 1 + Math.floor(input.charCompanion / 10) / 100
  let charHP: number = Math.floor(typeHP * input.charLevel + typeSelected[0].hp)
  charHP = Math.floor((charHP * input.charHPParm) / 100)
  charHP = Math.floor(charHP * comHP)
  return charHP
}
