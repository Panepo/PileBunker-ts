// slotChar: <[name weapon rarity plain hpF atF dfF totF]>
export interface CharInfo {
  id: number
  name: string
  weapon: string
  rarity: string
  plain: string
  hpF: string
  atF: string
  dfF: string
  totF: string
}

// slotType: <[name cname frame1 frame2 range hp atk def hpM atkM defM]>
export interface WeaponType {
  name: string
  cname: string
  frame1: number
  frame2: number
  range: number
  hp: number
  atk: number
  def: number
  hpM: number
  atkM: number
  defM: number
}

// slotWeapon: <[name type atk hit f1 f2 range rare text]>
export interface WeaponInfo {
  name: string // 武器名稱
  type: string // 種類, 英文
  atk: number // 攻擊力
  hit: number // 攻擊次數
  f1: number // 攻撃速度
  f2: number // 攻撃後の隙
  range: number // 射程
  rare: number // 稀有度
  target: number // 攻擊目標數
  text: string // 說明

  id: number // id
  damage: number // 造成的單下傷害
  frame1: number // バフ後攻撃速度
  frame2: number // バフ後攻撃後の隙
  dps: number // dps
  ref: number // 精煉值
  refText: string // 精煉表示
  time: number // 擊破時間
}
