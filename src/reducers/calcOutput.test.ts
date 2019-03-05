import * as calc from './calcOutput'
import { ListType } from '../constants/ConstCalc'
const imageSword = require('../images/type-sword.png')

describe('Calculate damage', () => {
  it('should get an equal value', () => {
    expect(calc.calcAtkDef(200, 100, 0, 100)).toEqual(200)
    expect(calc.calcAtkDef(200, 100, 100, 0)).toEqual(200)
    expect(calc.calcAtkDef(200, 100, 100, 100)).toEqual(400)
  })
})

describe('Calculate damage for special weapon', () => {
  it('should get an equal value', () => {
    expect(calc.calcDam(200, 100, 'test', 100, 0)).toEqual(200)
    expect(calc.calcDam(200, 100, '真・氏康の獅盾', 0, 100)).toEqual(220)
    expect(calc.calcDam(200, 100, '聖剣エクスカリバー', 100, 0)).toEqual(210)
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
