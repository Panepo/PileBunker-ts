import { Action, ActionType } from '../model/model'
import { QueryInput } from '../model/modelQuery'

export function charQuery(input: QueryInput): Action<QueryInput> {
  return {
    type: ActionType.CHAR_QUERY,
    payload: input
  }
}
