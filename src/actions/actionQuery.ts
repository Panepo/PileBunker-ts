import { Action, ActionType } from '../model/model';
import { QueryInput, QuerySelector } from '../model/modelQuery';

export function charQuery(input: QueryInput): Action<QueryInput> {
  return {
    type: ActionType.CHAR_QUERY,
    payload: input
  };
}

export function charQueryInput(input: QuerySelector): Action<QuerySelector> {
  return {
    type: ActionType.CHAR_QUERY_INPUT,
    payload: input
  };
}
