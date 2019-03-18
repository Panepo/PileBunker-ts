import { Action } from '../models/modelAction'
import { ActionTypeQuery, QueryInput } from '../models/modelQuery'

export const charQuery = (input: QueryInput): Action<QueryInput> => {
  return {
    type: ActionTypeQuery.CHAR_QUERY,
    payload: input
  }
}

export const weaponQuery = (wepId: number): Action<number> => {
  return {
    type: ActionTypeQuery.WEAPON_QUERY,
    payload: wepId
  }
}
