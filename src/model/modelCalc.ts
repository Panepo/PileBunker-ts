export interface CalcInput {
  column: string;
  value: number | string;
}

export interface CalcState {
  // 城娘設定頁面
  charType: string; // 武器種
  charLevel: number; // 城娘等級
  charAtkParm: number; // 城娘攻擊成長係數
  charCompanion: number; // 城娘の伴
  charStructure: number; // 設施的攻擊力

  // バフ設定頁面
  buffAtkPercent: number; // バフ攻撃%
  buffAtkNumber: number; // バフ攻擊
  buffSpeedPre: number; // バフ攻撃速度
  buffSpeedPost: number; // バフ攻撃後の隙
  buffDamageUp: number; // バフ与ダメ
  buffDirectUp: number; // バフ直撃ボーナス
  buffHitnumber: number; // バフ攻撃対象数

  // 敵設定頁面
  enemyNumber: number; // 數目
  enemyHitpoint: number; // 體力
  enemyDef: number; // 防禦力
  enemyDefPercent: number; // デバフ防御%
  enemyDefNumber: number; // デバフ防御
  enemyDamageUp: number; // デバフ被ダメ

  // 輸出
  output: LokiObj[];
}
