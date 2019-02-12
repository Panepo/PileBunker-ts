import createReducer from './createReducer';
import { Action, ActionType } from '../model/model';
import { CharInput, BuffInput, EnemyInput, CalcState } from '../model/modelCalc';
import { calcOutput } from './calcOutput';

const initialState: CalcState = {
  charInput: {
    charType: 'sword',
    charLevel: 1,
    charAtkParm: 100,
    charMax: 'max0',
    charCompanion: 100,
    charStructure: 0,
  },
  buffInput: {
    buffAtkPercent: 0,
    buffAtkNumber: 0,
    buffSpeedPre: 0,
    buffSpeedPost: 0,
    buffDamageUp: 0,
    buffDirectUp: 0,
    buffHitnumber: 0,
    buffIgoreDef: 0,
    buffTerrain: true,
    buffDirect: true,
  },
  enemyInput: {
    enemyNumber: 1,
    enemyHitpoint: 1000,
    enemyDef: 200,
    enemyDefPercent: 0,
    enemyDefNumber: 0,
    enemyDamageUp: 0,
    enemyFly: false,
    enemyMonster: false,
  },
  output: [],
};

export const reducerCalc = createReducer(initialState, {
  [ActionType.INPUT_CHAR_CHANGE](state: CalcState, action: Action<CharInput>) {
    return { ...state, charInput: action.payload, output: calcOutput(action.payload, state.buffInput, state.enemyInput) };
  },
  [ActionType.INPUT_BUFF_CHANGE](state: CalcState, action: Action<BuffInput>) {
    return { ...state, buffInput: action.payload, output: calcOutput(state.charInput, action.payload, state.enemyInput) };
  },
  [ActionType.INPUT_ENEMY_CHANGE](state: CalcState, action: Action<EnemyInput>) {
    return { ...state, enemyInput: action.payload, output: calcOutput(state.charInput, state.buffInput, action.payload) };
  },
});
