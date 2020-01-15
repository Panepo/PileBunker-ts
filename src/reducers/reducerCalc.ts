import createReducer from './createReducer'
import { Action } from '../models/modelAction'
import {
  ActionTypeCalc,
  CharInput,
  BuffInput,
  EnemyInput,
  CalcState
} from '../models/modelCalc'
import { calcOutput } from '../functions/calcOutput'
import { updateRefine, updateRefineMarco } from '../functions/calcRefine'

const initialChar: CharInput = {
  charType: 'sword',
  charLevel: 50,
  charAtkParm: 100,
  charDefParm: 100,
  charHPParm: 100,
  charMax: 1,
  charCompanion: 100,
  charStructure: 0
}

const initialBuff: BuffInput = {
  buffAtkPercent: 0,
  buffAtkNumber: 0,
  buffSpeedPre: 0,
  buffSpeedPost: 0,
  buffDamageUp: 0,
  buffDirectUp: 0,
  buffHitnumber: 0,
  buffIgoreDef: 0,
  buffAddIgore: 0,
  buffTerrain: true
}

const initialEnemy: EnemyInput = {
  enemyNumber: 1,
  enemyHitpoint: 1000,
  enemyDef: 200,
  enemyDefPercent: 0,
  enemyDefNumber: 0,
  enemyDamageUp: 0,
  enemyFly: false,
  enemyMonster: false
}

const initialState: CalcState = {
  charInput: initialChar,
  buffInput: initialBuff,
  enemyInput: initialEnemy,
  output: calcOutput(initialChar, initialBuff, initialEnemy)
}

export const reducerCalc = createReducer(initialState, {
  [ActionTypeCalc.INPUT_CHAR_CHANGE](
    state: CalcState,
    action: Action<CharInput>
  ) {
    return {
      ...state,
      charInput: action.payload,
      output: calcOutput(action.payload, state.buffInput, state.enemyInput)
    }
  },
  [ActionTypeCalc.INPUT_BUFF_CHANGE](
    state: CalcState,
    action: Action<BuffInput>
  ) {
    return {
      ...state,
      buffInput: action.payload,
      output: calcOutput(state.charInput, action.payload, state.enemyInput)
    }
  },
  [ActionTypeCalc.INPUT_ENEMY_CHANGE](
    state: CalcState,
    action: Action<EnemyInput>
  ) {
    return {
      ...state,
      enemyInput: action.payload,
      output: calcOutput(state.charInput, state.buffInput, action.payload)
    }
  },
  [ActionTypeCalc.REFINE_CHANGE](state: CalcState, action: Action<string>) {
    updateRefine(action.payload)
    return {
      ...state,
      output: calcOutput(state.charInput, state.buffInput, state.enemyInput)
    }
  },
  [ActionTypeCalc.REFINE_CHANGE_MARCO](
    state: CalcState,
    action: Action<string>
  ) {
    updateRefineMarco(action.payload)
    return {
      ...state,
      output: calcOutput(state.charInput, state.buffInput, state.enemyInput)
    }
  }
})
