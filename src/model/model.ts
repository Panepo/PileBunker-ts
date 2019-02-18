export enum ActionType {
  CHAR_QUERY,
  CHAR_QUERY_INPUT,
  INPUT_CHAR_CHANGE,
  INPUT_BUFF_CHANGE,
  INPUT_ENEMY_CHANGE,
  REFINE_CHANGE_MARCO,
  REFINE_CHANGE,
}

export interface Action<T> {
  type: ActionType;
  payload: T;
}
