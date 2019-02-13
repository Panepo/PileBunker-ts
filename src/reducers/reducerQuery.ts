import createReducer from './createReducer';
import { Action, ActionType } from '../model/model';
import { QueryInput, QueryState, QuerySelector } from '../model/modelQuery';
import { queryChar } from '../raw/dbQuery';

const initialState: QueryState = {
  input: { type: 'sword', plain: 15, rarity: 192 },
  output: queryChar({ type: 'sword', plain: 15, rarity: 192 }),
};

export const reducerQuery = createReducer(initialState, {
  [ActionType.CHAR_QUERY](state: QueryState, action: Action<QueryInput>) {
    return { ...state, input: action.payload, output: queryChar(action.payload) };
  },
  [ActionType.CHAR_QUERY_INPUT](state: QueryState, action: Action<QuerySelector>) {
    console.log(action.payload);
    switch (action.payload.selector) {
      case 'type': {
        let tempInput = state.input;
        tempInput.type = action.payload.value;
        return { ...state, input: tempInput, output: queryChar(tempInput) };
      }
      default: {
        return { ...state };
      }
    }
  },
});
