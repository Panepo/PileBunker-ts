import { Action, ActionType } from '../model/model'
import { CharInput, BuffInput, EnemyInput } from '../model/modelCalc'

export function charInput(input: CharInput): Action<CharInput> {
  return {
    type: ActionType.INPUT_CHAR_CHANGE,
    payload: input
  }
}

export function buffInput(input: BuffInput): Action<BuffInput> {
  return {
    type: ActionType.INPUT_BUFF_CHANGE,
    payload: input
  }
}

export function enemyInput(input: EnemyInput): Action<EnemyInput> {
  return {
    type: ActionType.INPUT_ENEMY_CHANGE,
    payload: input
  }
}

export function refineChange(wepName: string): Action<string> {
  return {
    type: ActionType.REFINE_CHANGE,
    payload: wepName
  }
}

export function refineChangeMarco(command: string): Action<string> {
  return {
    type: ActionType.REFINE_CHANGE_MARCO,
    payload: command
  }
}

export function weaponQuery(wepId: number): Action<number> {
  return {
    type: ActionType.WEAPON_QUERY,
    payload: wepId
  }
}
