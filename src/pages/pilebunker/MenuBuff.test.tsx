import * as React from 'react'
import MenuBuff from './MenuBuff'
import { createMockStore, createMockDispatch } from 'redux-test-utils'
import shallowWithStore from '../../helpers/enzyme.helper'
import { ActionTypeCalc, BuffInput } from '../../models/modelCalc'

const testBuffState: BuffInput = {
  buffAtkPercent: 0,
  buffAtkNumber: 0,
  buffSpeedPre: 0,
  buffSpeedPost: 0,
  buffDamageUp: 0,
  buffDirectUp: 0,
  buffHitnumber: 0,
  buffIgoreDef: 0,
  buffAddIgore: 0,
  buffTerrain: false
}

const testBuffInput: BuffInput = {
  buffAtkPercent: 10,
  buffAtkNumber: 10,
  buffSpeedPre: 10,
  buffSpeedPost: 10,
  buffDamageUp: 10,
  buffDirectUp: 10,
  buffHitnumber: 10,
  buffIgoreDef: 10,
  buffAddIgore: 10,
  buffTerrain: true
}

describe('MenuBuff test', () => {
  it('should render successfully', () => {
    const mockState = {
      buffInput: testBuffState
    }
    const store = createMockStore(mockState)
    const component = shallowWithStore(<MenuBuff />, store)
    expect(component).toBeTruthy()
  })

  it('should createMockStore works', () => {
    const mockState = {
      buffInput: testBuffState
    }
    const store = createMockStore(mockState)
    const action = {
      type: ActionTypeCalc.INPUT_BUFF_CHANGE,
      payload: testBuffInput
    }
    store.dispatch(action)
    expect(store.getAction(action.type)).toEqual(action)
    expect(store.getActions()).toEqual([action])
    expect(store.isActionDispatched(action)).toBe(true)
    expect(store.isActionTypeDispatched(action.type)).toBe(true)
    expect(store.getState()).toBe(mockState)
  })

  it('should createMockDispatch works', () => {
    const dispatchMock = createMockDispatch()
    const action = {
      type: ActionTypeCalc.INPUT_BUFF_CHANGE,
      payload: testBuffInput
    }
    dispatchMock.dispatch(action)

    expect(dispatchMock.getAction(action.type)).toEqual(action)
    expect(dispatchMock.getActions()).toEqual([action])
    expect(dispatchMock.isActionDispatched(action)).toBe(true)
    expect(dispatchMock.isActionTypeDispatched(action.type)).toBe(true)
  })
})
