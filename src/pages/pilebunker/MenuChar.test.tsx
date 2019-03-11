import * as React from 'react'
import MenuChar from './MenuChar'
import { createMockStore } from 'redux-test-utils'
import shallowWithStore from '../../helpers/enzyme.helper'

describe('MenuChar test', () => {
  it('should render successfully', () => {
    const mockState = {
      charQuery: { type: 'sword', plain: 15, rarity: 255 },
      charInput: {
        charType: 'sword',
        charLevel: 50,
        charAtkParm: 100,
        charDefParm: 100,
        charHPParm: 100,
        charMax: 1,
        charCompanion: 100,
        charStructure: 0
      }
    }
    const store = createMockStore(mockState)
    const component = shallowWithStore(<MenuChar />, store)
    expect(component).toBeTruthy()
  })
})
