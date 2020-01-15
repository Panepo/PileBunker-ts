import * as calc from './calcOutput'
import { ListType } from '../constants/ConstCalc'
import { BuffInput, EnemyInput } from '../models/modelCalc'
const imageSword = require('../images/type-sword.png')

describe('Calculate damage', () => {
  it('should get an equal value', () => {
    expect(calc.calcAtkDef(200, 100, 0, 100, 0, 0, 'test')).toEqual(200)
    expect(calc.calcAtkDef(200, 100, 100, 0, 0, 0, 'test')).toEqual(200)
    expect(calc.calcAtkDef(200, 100, 100, 100, 0, 0, 'test')).toEqual(400)
  })
})

describe('Calculate damage for special weapon', () => {
  it('should get an equal value', () => {
    const buffA: BuffInput = {
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

    const buffB: BuffInput = {
      buffAtkPercent: 0,
      buffAtkNumber: 0,
      buffSpeedPre: 0,
      buffSpeedPost: 0,
      buffDamageUp: 100,
      buffDirectUp: 0,
      buffHitnumber: 0,
      buffIgoreDef: 0,
      buffAddIgore: 0,
      buffTerrain: true
    }

    const enemyA: EnemyInput = {
      enemyNumber: 1,
      enemyHitpoint: 1000,
      enemyDef: 200,
      enemyDefPercent: 0,
      enemyDefNumber: 0,
      enemyDamageUp: 0,
      enemyFly: false,
      enemyMonster: false
    }

    const enemyB: EnemyInput = {
      enemyNumber: 1,
      enemyHitpoint: 1000,
      enemyDef: 200,
      enemyDefPercent: 0,
      enemyDefNumber: 0,
      enemyDamageUp: 100,
      enemyFly: false,
      enemyMonster: false
    }

    expect(calc.calcDam(200, 200, 100, 'test', buffB, enemyA)).toEqual(200)
    expect(
      calc.calcDam(200, 200, 100, '真・氏康の獅盾', buffA, enemyB)
    ).toEqual(220)
    expect(
      calc.calcDam(200, 200, 100, '聖剣エクスカリバー', buffB, enemyA)
    ).toEqual(210)
  })
})

describe('Query weapon type data', () => {
  it('should get the correct data', () => {
    const output: ListType = {
      cname: '刀',
      name: 'sword',
      image: imageSword,
      melee: true,
      physic: true,
      magic: false
    }
    expect(calc.checkType('sword')).toEqual(output)
    expect(calc.checkType('test')).toEqual(output)
  })
})

describe('Calculate cannon time', () => {
  it('should calculate the correct time', () => {
    expect(calc.calcCannonTime(100, 50, 1000, 1)).toEqual(10)
    expect(calc.calcCannonTime(100, 50, 1000, 2)).toEqual(15)
    expect(calc.calcCannonTime(100, 50, 1000, 3)).toEqual(18)
    expect(calc.calcCannonTime(100, 50, 1000, 4)).toEqual(19)
    expect(calc.calcCannonTime(100, 50, 1000, 5)).toEqual(20)
    expect(calc.calcCannonTime(100, 50, 1000, 6)).toEqual(20)
    expect(calc.calcCannonTime(100, 50, 1000, 7)).toEqual(20)
  })
})
