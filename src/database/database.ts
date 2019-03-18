import * as Lokijs from 'lokijs'
import * as weaponData from '../resource/weapons.json'
import * as typeData from '../resource/weaponTypes.json'
import * as charData from '../resource/chars.json'
import { WeaponType, WeaponInfo, CharInfo } from '../models/modelResource'

const db = new Lokijs('db')
export const dbWeapon: Collection<WeaponInfo> = db.addCollection('dbWeapon')
export const dbType: Collection<WeaponType> = db.addCollection('dbType')
export const dbChar: Collection<CharInfo> = db.addCollection('dbChar')

weaponData.forEach((element: WeaponInfo) => {
  dbWeapon.insert(element)
})

typeData.forEach((element: WeaponType) => {
  dbType.insert(element)
})

charData.forEach((element: CharInfo) => {
  dbChar.insert(element)
})
