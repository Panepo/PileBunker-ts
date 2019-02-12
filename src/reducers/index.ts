
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import * as reducerCalc from './reducerCalc';
import * as reducerQuery from './reducerQuery';
import { QueryState } from '../model/modelQuery';
import { CalcState } from '../model/modelCalc';

export interface RootState {
  reducerQuery: QueryState;
  reducerCalc: CalcState;
}

export default (history: History) => combineReducers({
  router: connectRouter(history),
  ...reducerQuery,
  ...reducerCalc
});
