import { reducerQuery } from './reducerQuery'
import { Action } from '../models/modelAction'
import { ActionTypeQuery, QueryState } from '../models/modelQuery'
import { queryChar, queryWeapon } from '../database/dbQuery'

describe('query reducer test', () => {
  it('should handle CHAR_QUERY', () => {
    const action: Action<any> = {
      type: ActionTypeQuery.CHAR_QUERY,
      payload: { type: 'staff', plain: 15, rarity: 192 }
    }
    const outputState: QueryState = {
      input: { type: 'staff', plain: 15, rarity: 192 },
      output: queryChar({ type: 'staff', plain: 15, rarity: 192 }),
      wepQuery: queryWeapon(1)
    }
    expect(reducerQuery(undefined, action)).toEqual(outputState)
  })

  it('should handle WEAPON_QUERY', () => {
    const action: Action<number> = {
      type: ActionTypeQuery.WEAPON_QUERY,
      payload: 100
    }
    const outputState: QueryState = {
      input: { type: 'sword', plain: 15, rarity: 192 },
      output: queryChar({ type: 'sword', plain: 15, rarity: 192 }),
      wepQuery: queryWeapon(100)
    }
    expect(reducerQuery(undefined, action)).toEqual(outputState)
  })
})
