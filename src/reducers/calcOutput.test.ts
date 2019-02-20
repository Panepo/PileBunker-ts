import * as calc from './calcOutput';
import { CharInput } from '../model/modelCalc';
import { ListType } from '../constants/ConstCalc';
const imageSword = require('../images/type-sword.png');

describe('Calculate character attack', () => {
  it('should get an equal value', () => {
    // lv70 熊本城
    let input: CharInput = {charType: 'sword', charLevel: 70, charAtkParm: 130, charMax: 1, charCompanion: 100, charStructure: 0 };
    expect(calc.calcAtk(input)).toEqual(249);

    // lv50 龜居城
    input = {charType: 'lance', charLevel: 50, charAtkParm: 104, charMax: 1, charCompanion: 100, charStructure: 0 };
    expect(calc.calcAtk(input)).toEqual(126);

    // lv125 プラハ城[改壱]
    input = {charType: 'staff', charLevel: 125, charAtkParm: 137, charMax: 1, charCompanion: 200, charStructure: 0 };
    expect(calc.calcAtk(input)).toEqual(579);
  });
});

describe('Calculate damage', () => {
  it('should get an equal value', () => {
    expect(calc.calcAtkDef(200, 100, 0, 100)).toEqual(200);
    expect(calc.calcAtkDef(200, 100, 100, 0)).toEqual(200);
    expect(calc.calcAtkDef(200, 100, 100, 100)).toEqual(400);
  });
});

describe('Calculate damage for special weapon', () => {
  it('should get an equal value', () => {
    expect(calc.calcDam(200, 100, 'test', 100, 0)).toEqual(200);
    expect(calc.calcDam(200, 100, '真・氏康の獅盾', 0, 100)).toEqual(220);
    expect(calc.calcDam(200, 100, '聖剣エクスカリバー', 100, 0)).toEqual(210);
  });
});

describe('Query weapon type data', () => {
  it('should get the correct data', () => {
    const output: ListType = { cname: '刀', name: 'sword', image: imageSword, melee: true, physic: true, magic: false };
    expect(calc.checkType('sword')).toEqual(output);
    expect(calc.checkType('test')).toEqual(output);
  });
});
