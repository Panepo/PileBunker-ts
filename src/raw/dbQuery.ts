import { dbChar } from './database';
import { listPlainQ } from '../constants/ConstList';
import { listType, listRarity, ListRarity } from '../constants/ConstCalc';
import { QueryInput } from '../model/modelQuery';
import { CharInfo } from '../model/modelQuery';

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
                    { plain: { $in: listPlainQ[input.plain - 1] } },
                    { rarity: data.value.toString() }
                  ]
                }
              ]
            })
            .data();

          charTemp.forEach((char: CharInfo) => {
            output.push(char);
          });
        }
        return output;
      },                       []);
    }
  }
  return [];
};
