import * as calc from './calcOutput';
import { CharInput } from '../model/modelCalc';

it('Calculate character attack for lv70 熊本城', () => {
  const input: CharInput = {
    charType: 'sword',
    charLevel: 70,
    charAtkParm: 130,
    charMax: 'max0',
    charCompanion: 100,
    charStructure: 0,
   };
  expect(calc.calcAtk(input)).toEqual(249);
});

it('Calculate character attack for lv50 龜居城', () => {
  const input: CharInput = {
    charType: 'lance',
    charLevel: 50,
    charAtkParm: 104,
    charMax: 'max0',
    charCompanion: 100,
    charStructure: 0,
   };
  expect(calc.calcAtk(input)).toEqual(138);
});

it('Calculate character attack for lv125 プラハ城[改壱]', () => {
  const input: CharInput = {
    charType: 'staff',
    charLevel: 125,
    charAtkParm: 137,
    charMax: 'max0',
    charCompanion: 200,
    charStructure: 0,
   };
  expect(calc.calcAtk(input)).toEqual(579);
});
