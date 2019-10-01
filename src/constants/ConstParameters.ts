export const muxPlain = 1.3 // define the multiplier when attacker have plain
export const muxFlyBow = 1.5 // define the multiplier when bow attack a flying enemy
export const muxFlyMelee = 0.5 // define the multiplier when melee attack a flying enemy
export const muxMonsMelee = 0.5 // define the multiplier when physical attack a monster
export const muxCanDirect = 0.5 // define the multiplier when cannon direct hit

export const valueProDam = 20 // define the promised damage when hit
export const valueFPS = 30 // define the system frame per second
export const valueMaxRef = 10 // define the maximum refine value

export const maxskillSpdUpF = 500 // define the maximum aspd skill value
export const maxskillSpdUpB = 100 // define the maximum aspd spell value

export const weaponAntiFly = [
  'スローイングナイフ',
  'ブーメランダガー',
  'ウォシュレ',
  'ダマスキナードナイフ',
  '月光の短剣',
  '桜花爛漫短剣',
  '桜花爛漫短剣[改]'
]
export interface WeaponSpecial {
  value: number
  name: string[]
}

export const wepIgnoreDef: WeaponSpecial[] = [
  { value: 0.9, name: ['氏康の獅盾', '真・氏康の獅盾', 'ヴァリス改'] },
  { value: 0.92, name: ['ヴァリス', '幽閉の紅弓'] },
  {
    value: 0.95,
    name: ['聖剣エクスカリバー', '人間無骨[改]', '元親の荒刃', '真・元親の荒刃']
  },
  { value: 0.97, name: ['月光の短剣[改]', '桜花爛漫短剣[改]'] }
]

export const wepDirectUp: WeaponSpecial[] = [
  { value: 50, name: ['義重の重槌', '真・義重の重槌'] }
]

export const wepDamUp: WeaponSpecial[] = [
  { value: 5, name: ['閻魔裁定筆'] },
  { value: 4, name: ['梓弓[改]', '雨夜手拍子[改]'] },
  { value: 2, name: ['国崩し[改]'] }
]

export const wepDefDown: WeaponSpecial[] = [
  { value: 0.9, name: ['山姥の槍[改]', '未来ガジェット5号機'] },
  { value: 0.92, name: ['妖刀村正[改]', '幽世の龍槍'] }
]

export const wepAtkUp: WeaponSpecial[] = [
  { value: 1.05, name: ['真・利家の巨槍[改]'] }
]
