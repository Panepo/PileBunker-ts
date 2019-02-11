import { dbChar } from './database';
import {
  listType,
  listTypeS,
  listPlainQ,
  listRarity
} from '../constants/ConstList';
import { QueryInput } from '../model/modelQuery';

export const queryChar = (input: QueryInput): LokiObj[] => {
  for (let i = 0; i < listTypeS.length; i += 1) {
    if (listTypeS[i] === input.type) {
      return listRarity.reduce((output: LokiObj[], data: number) => {
        // tslint:disable-next-line:no-bitwise
        if (input.rarity & Math.pow(2, data - 1)) {
          let charTemp = dbChar
            .chain()
            .find({
              $and: [
                { weapon: listType[i] },
                {
                  $and: [
                    { plain: { $in: listPlainQ[input.plain - 1] } },
                    { rarity: data.toString() }
                  ]
                }
              ]
            })
            .data();

          charTemp.forEach((char: LokiObj) => {
            output.push(char);
          });
        }
        return output;
      },                       []);
    }
  }
  return [];
};
