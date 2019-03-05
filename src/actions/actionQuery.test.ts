import { ActionType } from '../model/model'
import * as actionQuery from './actionQuery'
import { QueryInput } from '../model/modelQuery'

describe('action query test', () => {
  it('should create a correct action', () => {
    const input: QueryInput = { type: 'sword', plain: 15, rarity: 192 }
    const expectedAction = {
      type: ActionType.CHAR_QUERY,
      payload: input
    }
    expect(actionQuery.charQuery(input)).toEqual(expectedAction)
  })
})
