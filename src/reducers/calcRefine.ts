import { dbWeapon } from '../raw/database'
import { WeaponInfo } from '../model/modelCalc'
import * as parameters from '../constants/ConstParameters'

export const updateRefineMarco = (command: string) => {
  let weaponSelected: WeaponInfo[] = []
  switch (command) {
    case 'all-ref-0': {
      weaponSelected = dbWeapon.chain().data()
      weaponSelected.map((data: WeaponInfo) => {
        data.atk -= data.ref
        data.ref = 0
        data.refText = '+0'
        return data
      })
      dbWeapon.update(weaponSelected)
      break
    }
    case 'all-ref-10':
      weaponSelected = dbWeapon.chain().data()
      weaponSelected.map((data: WeaponInfo) => {
        data.atk -= data.ref
        data.atk += parameters.valueMaxRef
        data.ref = parameters.valueMaxRef
        data.refText = '+' + parameters.valueMaxRef.toString()
        return data
      })
      dbWeapon.update(weaponSelected)
      break
    case '4-ref-10':
      weaponSelected = dbWeapon
        .chain()
        .find({ rare: 4 })
        .data()
      weaponSelected.map((data: WeaponInfo) => {
        data.atk -= data.ref
        data.atk += parameters.valueMaxRef
        data.ref = parameters.valueMaxRef
        data.refText = '+' + parameters.valueMaxRef.toString()
        return data
      })
      dbWeapon.update(weaponSelected)
      break
    case '3-ref-10':
      weaponSelected = dbWeapon
        .chain()
        .find({ rare: 3 })
        .data()
      weaponSelected.map((data: WeaponInfo) => {
        data.atk -= data.ref
        data.atk += parameters.valueMaxRef
        data.ref = parameters.valueMaxRef
        data.refText = '+' + parameters.valueMaxRef.toString()
        return data
      })
      dbWeapon.update(weaponSelected)
      break
    case '2-ref-10':
      weaponSelected = dbWeapon
        .chain()
        .find({ rare: 2 })
        .data()
      weaponSelected.map((data: WeaponInfo) => {
        data.atk -= data.ref
        data.atk += parameters.valueMaxRef
        data.ref = parameters.valueMaxRef
        data.refText = '+' + parameters.valueMaxRef.toString()
        return data
      })
      dbWeapon.update(weaponSelected)
      break
    case '1-ref-10':
      weaponSelected = dbWeapon
        .chain()
        .find({ rare: 1 })
        .data()
      weaponSelected.map((data: WeaponInfo) => {
        data.atk -= data.ref
        data.atk += parameters.valueMaxRef
        data.ref = parameters.valueMaxRef
        data.refText = '+' + parameters.valueMaxRef.toString()
        return data
      })
      dbWeapon.update(weaponSelected)
      break
    default: {
    }
  }
}

export const updateRefine = (wepName: string) => {
  let weaponSelected: WeaponInfo[] = dbWeapon
    .chain()
    .find({ name: wepName })
    .data()

  if (weaponSelected[0].ref === parameters.valueMaxRef) {
    weaponSelected[0].atk -= parameters.valueMaxRef
    weaponSelected[0].ref = 0
    weaponSelected[0].refText = '+0'
  } else {
    weaponSelected[0].atk += 1
    weaponSelected[0].ref += 1
    weaponSelected[0].refText = '+' + weaponSelected[0].ref.toString()
  }
  dbWeapon.update(weaponSelected)
}
