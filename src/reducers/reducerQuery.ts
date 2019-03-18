import createReducer from './createReducer'
import { Action } from '../models/modelAction'
import { ActionTypeQuery, QueryInput, QueryState } from '../models/modelQuery'
import { queryChar, queryWeapon } from '../database/dbQuery'

const initialState: QueryState = {
  input: { type: 'sword', plain: 15, rarity: 192 },
  output: queryChar({ type: 'sword', plain: 15, rarity: 192 }),
  wepQuery: queryWeapon(1)
}

export const reducerQuery = createReducer(initialState, {
  [ActionTypeQuery.CHAR_QUERY](state: QueryState, action: Action<QueryInput>) {
    return {
      ...state,
      input: action.payload,
      output: queryChar(action.payload)
    }
  },
  [ActionTypeQuery.WEAPON_QUERY](state: QueryState, action: Action<number>) {
    return { ...state, wepQuery: queryWeapon(action.payload) }
  }
})
