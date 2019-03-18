import { Action } from '../models/modelAction'
import {
  ActionTypeCalc,
  CharInput,
  BuffInput,
  EnemyInput
} from '../models/modelCalc'

export const charInput = (input: CharInput): Action<CharInput> => {
  return {
    type: ActionTypeCalc.INPUT_CHAR_CHANGE,
    payload: input
  }
}

export const buffInput = (input: BuffInput): Action<BuffInput> => {
  return {
    type: ActionTypeCalc.INPUT_BUFF_CHANGE,
    payload: input
  }
}

export const enemyInput = (input: EnemyInput): Action<EnemyInput> => {
  return {
    type: ActionTypeCalc.INPUT_ENEMY_CHANGE,
    payload: input
  }
}

export const refineChange = (wepName: string): Action<string> => {
  return {
    type: ActionTypeCalc.REFINE_CHANGE,
    payload: wepName
  }
}

export const refineChangeMarco = (command: string): Action<string> => {
  return {
    type: ActionTypeCalc.REFINE_CHANGE_MARCO,
    payload: command
  }
}
