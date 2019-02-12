export interface QueryInput {
  type: string;
  plain: number;
  rarity: number;
}

export interface QueryState {
  output: CharInfo[];
}

// slotChar: <[name weapon rarity plain hpF atF dfF totF]>
export interface CharInfo {
  name: string;
  weapon: string;
  rarity: string;
  plain: string;
  hpF: string;
  atF: string;
  dfF: string;
  totF: string;
}
