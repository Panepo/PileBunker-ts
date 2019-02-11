import { dbChar } from './database';
import * as dbQuery from './dbQuery';
import { QueryInput } from '../model/modelQuery';

it('Query character from database', () => {
  const input: QueryInput = { type: 'bell', plain: 2, rarity: 8 };

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

  expect(dbQuery.queryChar(input)).toEqual(anwser);
});
