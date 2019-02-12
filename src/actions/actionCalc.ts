import { Action, ActionType } from '../model/model';
import { CharInput, BuffInput, EnemyInput } from '../model/modelCalc';

export function charInput(input: CharInput): Action<CharInput> {
  return {
    type: ActionType.INPUT_CHAR_CHANGE,
    payload: input
  };
}

export function buffInput(input: BuffInput): Action<BuffInput> {
  return {
    type: ActionType.INPUT_BUFF_CHANGE,
    payload: input
  };
}

export function enemyInput(input: EnemyInput): Action<EnemyInput> {
  return {
    type: ActionType.INPUT_ENEMY_CHANGE,
    payload: input
  };
}
