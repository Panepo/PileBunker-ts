export const defaultLevel = 50; // define the default level
export const defaultHPParm = 100; // define the default hp parameter
export const defaultAtkParm = 100; // define the default atk parameter
export const defaultDefParm = 100; // define the default def parameter
export const defaultCompanion = 100; // define the default Companion parameter

export const defaultDef = 100; // define the default defense value

export const muxPlain = 1.2; // define the multiplier when attacker have plain
export const muxFlyBow = 1.5; // define the multiplier when bow attack a flying enemy
export const muxFlyMelee = 0.5; // define the multiplier when melee attack a flying enemy
export const muxMonsMelee = 0.5; // define the multiplier when physical attack a monster
export const muxCanDirect = 0.5; // define the multiplier when cannon direct hit

export const valueProDam = 20; // define the promised damage when hit
export const valueFPS = 30; // define the system frame per second
export const valueMaxRef = 10; // define the maximum refine value

export const maxskillSpdUpF = 500; // define the maximum aspd skill value
export const maxskillSpdUpB = 100; // define the maximum aspd spell value

export const weaponAntiFly = [
  'スローイングナイフ',
  'ブーメランダガー',
  'ウォシュレ',
  'ダマスキナードナイフ',
  '月光の短剣'
];
export const weaponAtkUp = ['義重の重槌', '真・義重の重槌'];
export const weaponAtkUpValue = 50;

export interface WeaponIgnoreDef {
  value: number;
  name: string[];
}

export const wepIgnoreDef: WeaponIgnoreDef[] = [
  { value: 0.9, name: ['氏康の獅盾', '真・氏康の獅盾', 'ヴァリス改']},
  { value: 0.92, name: ['ヴァリス']},
  { value: 0.95, name: ['聖剣エクスカリバー']}
];
