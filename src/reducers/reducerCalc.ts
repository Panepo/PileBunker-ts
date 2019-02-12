import createReducer from './createReducer';
import { Action, ActionType } from '../model/model';
import { CharInput, BuffInput, EnemyInput, CalcState } from '../model/modelCalc';

const initialState: QueryState = {
  output: queryChar({ type: 'sword', plain: 15, rarity: 64 }),
};

export const reducerQuery = createReducer(initialState, {
  [ActionType.CHAR_QUERY](state: QueryState, action: Action<QueryInput>) {
    return { output: queryChar(action.payload) };
  },
});
