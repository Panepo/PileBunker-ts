import { CharInfo, WeaponInfo } from './modelResource'

export const ActionTypeQuery = {
  CHAR_QUERY: 'CHAR_QUERY',
  WEAPON_QUERY: 'WEAPON_QUERY'
}

export interface QueryInput {
  type: string
  plain: number
  rarity: number
}

export interface QueryState {
  input: QueryInput
  output: CharInfo[]
  wepQuery: WeaponInfo
}
