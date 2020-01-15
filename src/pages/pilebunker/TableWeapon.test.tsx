import * as React from 'react'
import TableWeapon from './TableWeapon'
import { createMockStore } from 'redux-test-utils'
import shallowWithStore from '../../helpers/enzyme.helper'
import { CharInput, BuffInput, EnemyInput } from '../../models/modelCalc'
import { calcOutput } from '../../functions/calcOutput'

const initialChar: CharInput = {
  charType: 'bell',
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
  enemyFly: true,
  enemyMonster: true
}

describe('TableWeapon test', () => {
  it('should render successfully', () => {
    const mockState = {
      weaponInfo: calcOutput(initialChar, initialBuff, initialEnemy)
    }
    const store = createMockStore(mockState)
    const component = shallowWithStore(<TableWeapon />, store)
    expect(component).toBeTruthy()
  })
})
