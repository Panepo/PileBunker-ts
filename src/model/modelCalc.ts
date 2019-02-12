export interface CharInput {
  charType: string; // 武器種
  charLevel: number; // 城娘等級
  charAtkParm: number; // 城娘攻擊成長係數
  charMax: string; // 城娘的巨大化等級
  charCompanion: number; // 城娘の伴
  charStructure: number; // 設施的攻擊力
}

export interface BuffInput {
  // バフ設定頁面
  buffAtkPercent: number; // バフ攻撃%
  buffAtkNumber: number; // バフ攻擊
  buffSpeedPre: number; // バフ攻撃速度
  buffSpeedPost: number; // バフ攻撃後の隙
  buffDamageUp: number; // バフ与ダメ
  buffDirectUp: number; // バフ直撃ボーナス
  buffHitnumber: number; // バフ攻撃対象数
  buffIgoreDef: number; // バフ無視防禦%
  buffTerrain: boolean; // 地形適性有無
  buffDirect: boolean; // 直擊有無
}

export interface EnemyInput {
  // 敵設定頁面
  enemyNumber: number; // 數目
  enemyHitpoint: number; // 體力
  enemyDef: number; // 防禦力
  enemyDefPercent: number; // デバフ防御%
  enemyDefNumber: number; // デバフ防御
  enemyDamageUp: number; // デバフ被ダメ
  enemyFly: boolean; // 飛行敵
  enemyMonster: boolean; // 妖怪
}

export interface CalcState {
  charInput: CharInput;
  buffInput: BuffInput;
  enemyInput: EnemyInput;
  output: WeaponInfo[];
}

// slotType: <[name cname frame1 frame2 range hp atk def hpM atkM defM]>
export interface WeaponType {
  name: string;
  cname: string;
  frame1: number;
  frame2: number;
  range: number;
  hp: number;
  atk: number;
  def: number;
  hpM: number;
  atkM: number;
  defM: number;
}

// slotWeapon: <[name type atk hit f1 f2 range rare text]>
export interface WeaponInfo {
  name: string;
  type: string;
  atk: number;
  hit: number;
  f1: number;
  f2: number;
  range: number;
  rare: number;
  text: string;

  damage: number;
  frame1: number;
  frame2: number;
  dps: number;
  ref: number;
  refText: string;
}
