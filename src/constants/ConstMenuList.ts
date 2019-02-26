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
  { id: 'switch-buffTerrain', label: '地形適性', value: 'buffTerrain' },
];

export const menuEnemyList: MenuList[] = [
  { id: 'select-enemyNumber', label: '數目', value: 'enemyNumber' },
  { id: 'select-enemyHitpoint', label: '耐久', value: 'enemyHitpoint' },
  { id: 'select-enemyDef', label: '防禦力', value: 'enemyDef' },
  { id: 'select-enemyDefPercent', label: '防禦力減少%', value: 'enemyDefPercent' },
  { id: 'select-enemyDefNumber', label: '防禦力減少', value: 'enemyDefNumber' },
  { id: 'select-enemyDamageUp', label: '被ダメージが上昇(%)', value: 'enemyDamageUp' },
];

export const menuEnemySwitch: MenuList[] = [
  { id: 'switch-enemyFly', label: '飛行', value: 'enemyFly' },
  { id: 'switch-enemyMonster', label: '妖怪', value: 'enemyMonster' },
];

export const menuRefineList: MenuList[] = [
  { id: 'button-all-ref-0', label: '無精煉', value: 'all-ref-0' },
  { id: 'button-all-ref-10', label: '全精煉+10', value: 'all-ref-10' },
  { id: 'button-4-ref-10', label: '★4+10', value: '4-ref-10' },
  { id: 'button-3-ref-10', label: '★3+10', value: '3-ref-10' },
  { id: 'button-2-ref-10', label: '★2+10', value: '2-ref-10' },
  { id: 'button-1-ref-10', label: '★1+10', value: '1-ref-10' },
];
