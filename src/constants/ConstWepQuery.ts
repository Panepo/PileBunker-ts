export interface ListWepQuery {
  id: string;
  label: string;
}

export const listWepQuery = [
  { id: 'name', label: '名稱' },
  { id: 'rare', label: '★' },
  { id: 'refText', label: '精煉' },
  { id: 'atk', label: '攻擊' },
  { id: 'damage', label: '傷害' },
  { id: 'dps', label: 'DPS' },
  { id: 'frame1', label: '攻擊(f)' },
  { id: 'frame2', label: '延遲(f)' },
  { id: 'text', label: '說明' },
];
