import * as React from 'react'
import MenuBuff from './MenuBuff'
import { createMockStore } from 'redux-test-utils'
import shallowWithStore from '../../helpers/enzyme.helper'

describe('MenuBuff test', () => {
  it('should render successfully', () => {
    const mockState = {
      buffInput: {
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
    }
    const store = createMockStore(mockState)
    const component = shallowWithStore(<MenuBuff />, store)
    expect(component).toBeTruthy()
  })
})
