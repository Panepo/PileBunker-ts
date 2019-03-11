import * as React from 'react'
import MenuEnemy from './MenuEnemy'
import { createMockStore } from 'redux-test-utils'
import shallowWithStore from '../../helpers/enzyme.helper'

describe('MenuEnemy test', () => {
  it('should render successfully', () => {
    const mockState = {
      enemyInput: {
        enemyNumber: 1,
        enemyHitpoint: 1000,
        enemyDef: 200,
        enemyDefPercent: 0,
        enemyDefNumber: 0,
        enemyDamageUp: 0,
        enemyFly: false,
        enemyMonster: false
      }
    }
    const store = createMockStore(mockState)
    const component = shallowWithStore(<MenuEnemy />, store)
    expect(component).toBeTruthy()
  })
})
