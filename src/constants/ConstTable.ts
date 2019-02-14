export interface TableCharHead {
  id: string;
  numeric: boolean;
  disablePadding: boolean;
  label: string;
}

export const tableCharHead = [
  { id: 'name', numeric: false, disablePadding: true, label: '名稱' },
  { id: 'weapon', numeric: false, disablePadding: false, label: '武器種' },
  { id: 'rarity', numeric: false, disablePadding: false, label: '★' },
  { id: 'plain', numeric: false, disablePadding: false, label: '屬性' },
  { id: 'hpF', numeric: true, disablePadding: false, label: '耐久係數' },
  { id: 'atF', numeric: true, disablePadding: false, label: '攻擊係數' },
  { id: 'dfF', numeric: true, disablePadding: false, label: '防禦係數' },
  { id: 'totF', numeric: true, disablePadding: false, label: '係數合計' },
];
