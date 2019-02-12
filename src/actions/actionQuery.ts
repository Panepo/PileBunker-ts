import { Action, ActionType } from '../model/model';
import { QueryInput } from '../model/modelQuery';

export function charQuery(selector: QueryInput): Action<QueryInput> {
  return {
    type: ActionType.CHAR_QUERY,
    payload: selector
  };
}
