import * as actionQuery from './actionQuery'
import { ActionTypeQuery, QueryInput } from '../models/modelQuery'

describe('action query test', () => {
  it('should create a correct action', () => {
    const input: QueryInput = { type: 'sword', plain: 15, rarity: 192 }
    const expectedAction = {
      type: ActionTypeQuery.CHAR_QUERY,
      payload: input
    }
    expect(actionQuery.charQuery(input)).toEqual(expectedAction)
  })

  it('should create a correct action', () => {
    const input: number = 123
    const expectedAction = {
      type: ActionTypeQuery.WEAPON_QUERY,
      payload: input
    }
    expect(actionQuery.weaponQuery(input)).toEqual(expectedAction)
  })
})
