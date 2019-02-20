import { reducerQuery } from './reducerQuery';
import { Action, ActionType } from '../model/model';
import { QueryState } from '../model/modelQuery';
import { queryChar } from '../raw/dbQuery';

describe('query reducer test', () => {
  it('should return the initial state', () => {
    const initialState: QueryState = {
      input: { type: 'sword', plain: 15, rarity: 192 },
      output: queryChar({ type: 'sword', plain: 15, rarity: 192 }),
    };
    const action: Action<any> = {
      type: ActionType.REFINE_CHANGE,
      payload: 'test',
    };
    expect(reducerQuery(undefined, action)).toEqual(initialState);
  });

  it('should handle CHAR_QUERY', () => {
    const action: Action<any> = {
      type: ActionType.CHAR_QUERY,
      payload: { type: 'staff', plain: 15, rarity: 192 },
    };
    const outputState: QueryState = {
      input: { type: 'staff', plain: 15, rarity: 192 },
      output: queryChar({ type: 'staff', plain: 15, rarity: 192 }),
    };
    expect(reducerQuery(undefined, action)).toEqual(outputState);
  });
});
