import * as Lokijs from 'lokijs';
import * as weaponData from './weapons.json';
import * as typeData from './weaponTypes.json';
import * as charData from './chars.json';
import { WeaponType, WeaponInfo } from '../model/modelCalc';
import { CharInfo } from '../model/modelQuery';

const db = new Lokijs('db');
export const dbWeapon: Collection<WeaponInfo> = db.addCollection('dbWeapon');
export const dbType: Collection<WeaponType> = db.addCollection('dbType');
export const dbChar: Collection<CharInfo> = db.addCollection('dbChar');

weaponData.forEach((element: WeaponInfo) => {
  dbWeapon.insert(element);
});

typeData.forEach((element: WeaponType) => {
  dbType.insert(element);
});

charData.forEach((element: CharInfo) => {
  dbChar.insert(element);
});
