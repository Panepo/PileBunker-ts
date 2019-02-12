import createReducer from './createReducer';
import { Action, ActionType } from '../model/model';
import { QueryInput, QueryState } from '../model/modelQuery';
import { queryChar } from '../raw/dbQuery';

const initialState: QueryState = {
  output: queryChar({ type: 'sword', plain: 15, rarity: 64 }),
};

export const reducerQuery = createReducer(initialState, {
  [ActionType.CHAR_QUERY](state: QueryState, action: Action<QueryInput>) {
    return { output: queryChar(action.payload) };
  },
});
