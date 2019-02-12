export enum ActionType {
  CHAR_QUERY,
  INPUT_CHAR_CHANGE,
  INPUT_BUFF_CHANGE,
  INPUT_ENEMY_CHANGE,
}

export interface Action<T> {
  type: ActionType;
  payload: T;
}
