import { dbChar } from './database'
import * as dbQuery from './dbQuery'
import { QueryInput } from '../model/modelQuery'
import { CharInfo } from '../model/modelQuery'

it('Query character from database', () => {
  let input: QueryInput = { type: 'bell', plain: 2, rarity: 8 }
  let anwser: CharInfo[] = dbChar
    .chain()
    .find({
      $and: [
        { weapon: 'bell' },
        { $and: [{ plain: { $in: '平山' } }, { rarity: 8 }] }
      ]
    })
    .data()
  expect(dbQuery.queryChar(input)).toEqual(anwser)

  input = { type: 'bell', plain: 2, rarity: 15 }
  let anwserTemp: CharInfo[] = dbChar
    .chain()
    .find({
      $and: [
        { weapon: 'bell' },
        { $and: [{ plain: { $in: '平山' } }, { rarity: 7 }] }
      ]
    })
    .data()
  anwserTemp.forEach((char: CharInfo) => {
    anwser.push(char)
  })
  expect(dbQuery.queryChar(input)).toEqual(anwser)
})
