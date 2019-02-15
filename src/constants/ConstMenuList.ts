export interface MenuList {
  id: string;
  label: string;
  value: string;
}

export const menuBuffList: MenuList[] = [
  { id: 'select-buffAtkPercent', label: '攻擊力增加(%)', value: 'buffAtkPercent' },
  { id: 'select-buffAtkNumber', label: '攻擊力增加', value: 'buffAtkNumber' },
  { id: 'select-buffSpeedPre', label: '攻撃速度上昇(%)', value: 'buffSpeedPre' },
  { id: 'select-buffSpeedPost', label: '攻撃後の隙短縮(%)', value: 'buffSpeedPost' },
  { id: 'select-buffDamageUp', label: 'ダメージが上昇(%)', value: 'buffDamageUp' },
  { id: 'select-buffDirectUp', label: '直撃ボーナス上昇(%)', value: 'buffDirectUp' },
  { id: 'select-buffHitnumber', label: '攻撃対象数上昇', value: 'buffHitnumber' },
  { id: 'select-buffIgoreDef', label: '防御を無視する(%)', value: 'buffIgoreDef' },
];

export const menuBuffSwitch: MenuList[] = [
  { id: 'switch-buffTerrain', label: '地形適性あり', value: 'buffTerrain' },
  { id: 'switch-buffDirect', label: '直擊あり', value: 'buffDirect' },
];

export const menuEnemyList: MenuList[] = [
  { id: 'select-enemyNumber', label: '數目', value: 'enemyNumber' },
  { id: 'select-enemyHitpoint', label: '體力', value: 'enemyHitpoint' },
  { id: 'select-enemyDef', label: '防禦力', value: 'enemyDef' },
  { id: 'select-enemyDefPercent', label: '防禦力減少%', value: 'enemyDefPercent' },
  { id: 'select-enemyDefNumber', label: '防禦力減少', value: 'enemyDefNumber' },
  { id: 'select-enemyDamageUp', label: '被ダメージが上昇(%)', value: 'enemyDamageUp' },
];

export const menuEnemySwitch: MenuList[] = [
  { id: 'switch-enemyFly', label: '飛行あり', value: 'enemyFly' },
  { id: 'switch-enemyMonster', label: '妖怪あり', value: 'enemyMonster' },
];
