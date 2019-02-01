import * as Lokijs from 'lokijs';
import weaponData from './weapons.json';
import typeData from './weaponTypes.json';
import charData from './chars.json';

const db = new Lokijs('db');
export const dbWeapon: Collection<object> = db.addCollection('dbWeapon');
export const dbType: Collection<object> = db.addCollection('dbType');
export const dbChar: Collection<object> = db.addCollection('dbChar');

weaponData.forEach((element: object) => {
  dbWeapon.insert(element);
});

typeData.forEach((element: object) => {
  dbType.insert(element);
});

charData.forEach((element: object) => {
  dbChar.insert(element);
});
