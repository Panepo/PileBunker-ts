import { dbChar } from './database';
import * as dbQuery from './dbQuery';

it('Query character from database', () => {
  const type: string = 'bell';
  const plain: number = 2;
  const rarity: number = 8;

  const anwser: LokiObj[] = dbChar.chain()
    .find({
      $and: [
        { weapon: 'bell' },
        {
          $and: [
            { plain: { $in: '平山' } },
            { rarity: 8 }
          ]
        }
      ]
    })
    .data();

  expect(dbQuery.queryChar(type, plain, rarity)).toEqual(anwser);
});
