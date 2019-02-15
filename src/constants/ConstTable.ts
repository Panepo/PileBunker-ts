export interface TableHeadInterface {
  id: string;
  numeric: boolean;
  disablePadding: boolean;
  label: string;
}

export const tableCharHead = [
  { id: 'name', numeric: false, disablePadding: false, label: '名稱' },
  { id: 'weapon', numeric: false, disablePadding: false, label: '武器種' },
  { id: 'rarity', numeric: false, disablePadding: false, label: '★' },
  { id: 'plain', numeric: false, disablePadding: false, label: '屬性' },
  { id: 'hpF', numeric: false, disablePadding: true, label: '耐久係數' },
  { id: 'atF', numeric: false, disablePadding: true, label: '攻擊係數' },
  { id: 'dfF', numeric: false, disablePadding: true, label: '防禦係數' },
  { id: 'totF', numeric: false, disablePadding: true, label: '係數合計' },
];

export const tableWeaponHead = [
  { id: 'name', numeric: false, disablePadding: false, label: '名稱' },
  { id: 'rare', numeric: false, disablePadding: false, label: '★' },
  { id: 'refText', numeric: false, disablePadding: false, label: '精煉' },
  { id: 'atk', numeric: false, disablePadding: false, label: '攻擊' },
  { id: 'damage', numeric: false, disablePadding: false, label: '傷害' },
  { id: 'dps', numeric: false, disablePadding: false, label: 'DPS' },
  { id: 'frame1', numeric: false, disablePadding: false, label: '攻擊(f)' },
  { id: 'frame2', numeric: false, disablePadding: false, label: '延遲(f)' },
  { id: 'text', numeric: false, disablePadding: false, label: '說明' },
];
