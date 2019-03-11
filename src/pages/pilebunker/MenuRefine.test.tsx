import * as React from 'react'
import MenuRefine from './MenuRefine'
import { createMockStore } from 'redux-test-utils'
import shallowWithStore from '../../helpers/enzyme.helper'

describe('MenuRefine test', () => {
  it('should render successfully', () => {
    const mockState = {}
    const store = createMockStore(mockState)
    const component = shallowWithStore(<MenuRefine />, store)
    expect(component).toBeTruthy()
  })
})
