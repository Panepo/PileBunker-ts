export interface QueryInput {
  type: string;
  plain: number;
  rarity: number;
}

export interface QueryState {
  output: LokiObj[];
}
