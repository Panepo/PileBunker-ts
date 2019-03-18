import * as calc from './calcChar'
import { CharInput } from '../models/modelCalc'

describe('Calculate character attack', () => {
  it('should get an equal value', () => {
    // lv70 熊本城
    let input: CharInput = {
      charType: 'sword',
      charLevel: 70,
      charAtkParm: 130,
      charDefParm: 100,
      charHPParm: 100,
      charMax: 1,
      charCompanion: 100,
      charStructure: 0
    }
    expect(calc.calcAtk(input)).toEqual(249)

    // lv50 龜居城
    input = {
      charType: 'lance',
      charLevel: 50,
      charAtkParm: 104,
      charDefParm: 100,
      charHPParm: 100,
      charMax: 1,
      charCompanion: 100,
      charStructure: 0
    }
    expect(calc.calcAtk(input)).toEqual(126)

    // lv125 プラハ城[改壱]
    input = {
      charType: 'staff',
      charLevel: 125,
      charAtkParm: 137,
      charDefParm: 100,
      charHPParm: 100,
      charMax: 1,
      charCompanion: 200,
      charStructure: 0
    }
    expect(calc.calcAtk(input)).toEqual(579)
  })
})
