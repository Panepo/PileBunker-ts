import { dbChar, dbWeapon } from './database'
import {
  listType,
  listRarity,
  ListRarity,
  listTerrainQuery
} from '../constants/ConstCalc'
import { QueryInput, CharInfo } from '../model/modelQuery'
import { WeaponInfo } from '../model/modelCalc'

export const queryChar = (input: QueryInput): CharInfo[] => {
  for (let i = 0; i < listType.length; i += 1) {
    if (listType[i].name === input.type) {
      return listRarity.reduce((output: CharInfo[], data: ListRarity) => {
        // tslint:disable-next-line:no-bitwise
        if (input.rarity & Math.pow(2, data.value - 1)) {
          let charTemp: CharInfo[] = dbChar
            .chain()
            .find({
              $and: [
                { weapon: listType[i].cname },
                {
                  $and: [
                    { plain: { $in: listTerrainQuery[input.plain - 1] } },
                    { rarity: data.value.toString() }
                  ]
                }
              ]
            })
            .data()

          charTemp.forEach((char: CharInfo) => {
            output.push(char)
          })
        }
        return output
      }, [])
    }
  }
  return []
}

export const queryWeapon = (input: number): WeaponInfo => {
  const weaponSelected: WeaponInfo[] = dbWeapon
    .chain()
    .find({ id: input })
    .data()

  return weaponSelected[0]
}
