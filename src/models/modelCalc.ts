import { WeaponInfo } from './modelResource'

export const ActionTypeCalc = {
  INPUT_CHAR_CHANGE: 'INPUT_CHAR_CHANGE',
  INPUT_BUFF_CHANGE: 'INPUT_BUFF_CHANGE',
  INPUT_ENEMY_CHANGE: 'INPUT_ENEMY_CHANGE',
  REFINE_CHANGE: 'REFINE_CHANGE',
  REFINE_CHANGE_MARCO: 'REFINE_CHANGE_MARCO'
}

export interface CharInput {
  charType: string // 武器種
  charLevel: number // 城娘等級
  charAtkParm: number // 城娘攻擊成長係數
  charDefParm: number // 城娘防禦成長係數
  charHPParm: number // 城娘耐久成長係數
  charMax: number // 城娘的巨大化等級
  charCompanion: number // 城娘の伴
  charStructure: number // 設施的攻擊力
}

export interface BuffInput {
  // バフ設定頁面
  buffAtkPercent: number // バフ攻撃%
  buffAtkNumber: number // バフ攻擊
  buffSpeedPre: number // バフ攻撃速度
  buffSpeedPost: number // バフ攻撃後の隙
  buffDamageUp: number // バフ与ダメ
  buffDirectUp: number // バフ直撃ボーナス
  buffHitnumber: number // バフ攻撃対象数
  buffIgoreDef: number // バフ無視防禦%
  buffAddIgore: number // バフ雷擊追加%
  buffTerrain: boolean // 地形適性有無
}

export interface EnemyInput {
  // 敵設定頁面
  enemyNumber: number // 數目
  enemyHitpoint: number // 體力
  enemyDef: number // 防禦力
  enemyDefPercent: number // デバフ防御%
  enemyDefNumber: number // デバフ防御
  enemyDamageUp: number // デバフ被ダメ
  enemyFly: boolean // 飛行敵
  enemyMonster: boolean // 妖怪
}

export interface CalcState {
  charInput: CharInput
  buffInput: BuffInput
  enemyInput: EnemyInput
  output: WeaponInfo[]
}
