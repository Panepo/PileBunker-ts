import { reducerCalc } from './reducerCalc'
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

describe('calc reducer test', () => {
  it('should handle INPUT_CHAR_CHANGE', () => {
    const action: Action<CharInput> = {
      type: ActionTypeCalc.INPUT_CHAR_CHANGE,
      payload: {
        charType: 'bow',
        charLevel: 50,
        charAtkParm: 125,
        charDefParm: 100,
        charHPParm: 100,
        charMax: 1,
        charCompanion: 100,
        charStructure: 0
      }
    }
    const outputState: CalcState = {
      charInput: action.payload,
      buffInput: initialBuff,
      enemyInput: initialEnemy,
      output: calcOutput(action.payload, initialBuff, initialEnemy)
    }
    expect(reducerCalc(initialState, action)).toEqual(outputState)
  })

  it('should handle INPUT_BUFF_CHANGE', () => {
    const action: Action<BuffInput> = {
      type: ActionTypeCalc.INPUT_BUFF_CHANGE,
      payload: {
        buffAtkPercent: 10,
        buffAtkNumber: 10,
        buffSpeedPre: 20,
        buffSpeedPost: 20,
        buffDamageUp: 10,
        buffDirectUp: 50,
        buffHitnumber: 0,
        buffIgoreDef: 20,
        buffAddIgore: 0,
        buffTerrain: true
      }
    }
    const outputState: CalcState = {
      charInput: initialChar,
      buffInput: action.payload,
      enemyInput: initialEnemy,
      output: calcOutput(initialChar, action.payload, initialEnemy)
    }
    expect(reducerCalc(initialState, action)).toEqual(outputState)
  })

  it('should handle INPUT_ENEMY_CHANGE', () => {
    const action: Action<EnemyInput> = {
      type: ActionTypeCalc.INPUT_ENEMY_CHANGE,
      payload: {
        enemyNumber: 1,
        enemyHitpoint: 1000,
        enemyDef: 200,
        enemyDefPercent: 10,
        enemyDefNumber: 10,
        enemyDamageUp: 10,
        enemyFly: true,
        enemyMonster: true
      }
    }
    const outputState: CalcState = {
      charInput: initialChar,
      buffInput: initialBuff,
      enemyInput: action.payload,
      output: calcOutput(initialChar, initialBuff, action.payload)
    }
    expect(reducerCalc(initialState, action)).toEqual(outputState)
  })

  it('should handle REFINE_CHANGE', () => {
    const action: Action<string> = {
      type: ActionTypeCalc.REFINE_CHANGE,
      payload: '手裏剣'
    }
    updateRefine(action.payload)
    const outputState: CalcState = {
      charInput: initialChar,
      buffInput: initialBuff,
      enemyInput: initialEnemy,
      output: calcOutput(initialChar, initialBuff, initialEnemy)
    }
    expect(reducerCalc(initialState, action)).toEqual(outputState)
  })

  it('should handle REFINE_CHANGE_MARCO', () => {
    const action: Action<string> = {
      type: ActionTypeCalc.REFINE_CHANGE_MARCO,
      payload: '1-ref-10'
    }
    updateRefineMarco(action.payload)
    const outputState: CalcState = {
      charInput: initialChar,
      buffInput: initialBuff,
      enemyInput: initialEnemy,
      output: calcOutput(initialChar, initialBuff, initialEnemy)
    }
    expect(reducerCalc(initialState, action)).toEqual(outputState)
  })
})
