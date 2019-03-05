import createReducer from './createReducer'
import { Action, ActionType } from '../model/model'
import { CharInput, BuffInput, EnemyInput, CalcState } from '../model/modelCalc'
import { calcOutput } from './calcOutput'
import { updateRefine, updateRefineMarco } from './calcRefine'
import { queryWeapon } from '../raw/dbQuery'

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
  output: calcOutput(initialChar, initialBuff, initialEnemy),
  wepQuery: queryWeapon(1)
}

export const reducerCalc = createReducer(initialState, {
  [ActionType.INPUT_CHAR_CHANGE](state: CalcState, action: Action<CharInput>) {
    return {
      ...state,
      charInput: action.payload,
      output: calcOutput(action.payload, state.buffInput, state.enemyInput)
    }
  },
  [ActionType.INPUT_BUFF_CHANGE](state: CalcState, action: Action<BuffInput>) {
    return {
      ...state,
      buffInput: action.payload,
      output: calcOutput(state.charInput, action.payload, state.enemyInput)
    }
  },
  [ActionType.INPUT_ENEMY_CHANGE](
    state: CalcState,
    action: Action<EnemyInput>
  ) {
    return {
      ...state,
      enemyInput: action.payload,
      output: calcOutput(state.charInput, state.buffInput, action.payload)
    }
  },
  [ActionType.REFINE_CHANGE](state: CalcState, action: Action<string>) {
    updateRefine(action.payload)
    return {
      ...state,
      output: calcOutput(state.charInput, state.buffInput, state.enemyInput)
    }
  },
  [ActionType.REFINE_CHANGE_MARCO](state: CalcState, action: Action<string>) {
    updateRefineMarco(action.payload)
    return {
      ...state,
      output: calcOutput(state.charInput, state.buffInput, state.enemyInput)
    }
  },
  [ActionType.WEAPON_QUERY](state: CalcState, action: Action<number>) {
    return { ...state, wepQuery: queryWeapon(action.payload) }
  }
})
