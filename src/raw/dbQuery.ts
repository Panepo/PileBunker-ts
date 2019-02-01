import { dbChar } from './database';
import {
  listType,
  listTypeS,
  listPlainQ,
  listRarity
} from '../constants/ConstList';

export const queryChar = (type: string, plain: number, rarity: number) => {
  for (let i = 0; i < listTypeS.length; i += 1) {
    if (listTypeS[i] === type) {
      return listRarity.reduce((output: object[], data: number) => {
        // tslint:disable-next-line:no-bitwise
        if (rarity & Math.pow(2, data - 1)) {
          let charTemp = dbChar
            .chain()
            .find({
              $and: [
                { weapon: listType[i] },
                {
                  $and: [
                    { plain: { $in: listPlainQ[plain - 1] } },
                    { rarity: data.toString() }
                  ]
                }
              ]
            })
            .data();

          charTemp.forEach((char: object) => {
            output.push(char);
          });
        }
        return output;
      },                       []);
    }
  }
  return [];
};
