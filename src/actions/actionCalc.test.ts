import * as actionCalc from './actionCalc'
import {
  ActionTypeCalc,
  CharInput,
  BuffInput,
  EnemyInput
} from '../models/modelCalc'

describe('action calc test', () => {
  it('should create a correct action', () => {
    const input: CharInput = {
      charType: 'sword',
      charLevel: 50,
      charAtkParm: 100,
      charDefParm: 100,
      charHPParm: 100,
      charMax: 1,
      charCompanion: 100,
      charStructure: 0
    }
    const expectedAction = {
      type: ActionTypeCalc.INPUT_CHAR_CHANGE,
      payload: input
    }
    expect(actionCalc.charInput(input)).toEqual(expectedAction)
  })

  it('should create a correct action', () => {
    const input: BuffInput = {
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
    const expectedAction = {
      type: ActionTypeCalc.INPUT_BUFF_CHANGE,
      payload: input
    }
    expect(actionCalc.buffInput(input)).toEqual(expectedAction)
  })

  it('should create a correct action', () => {
    const input: EnemyInput = {
      enemyNumber: 1,
      enemyHitpoint: 1000,
      enemyDef: 200,
      enemyDefPercent: 0,
      enemyDefNumber: 0,
      enemyDamageUp: 0,
      enemyFly: false,
      enemyMonster: false
    }
    const expectedAction = {
      type: ActionTypeCalc.INPUT_ENEMY_CHANGE,
      payload: input
    }
    expect(actionCalc.enemyInput(input)).toEqual(expectedAction)
  })

  it('should create a correct action', () => {
    const input: string = 'test'
    const expectedAction = {
      type: ActionTypeCalc.REFINE_CHANGE,
      payload: input
    }
    expect(actionCalc.refineChange(input)).toEqual(expectedAction)
  })

  it('should create a correct action', () => {
    const input: string = 'test'
    const expectedAction = {
      type: ActionTypeCalc.REFINE_CHANGE_MARCO,
      payload: input
    }
    expect(actionCalc.refineChangeMarco(input)).toEqual(expectedAction)
  })
})
