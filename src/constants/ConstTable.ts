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
