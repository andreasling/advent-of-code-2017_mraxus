const { next, halfwayAround} = require('../01')

describe('Day 1', () => {
  const partOne = [
    {input: '1122', result: 3},
    {input: '1111', result: 4},
    {input: '1234', result: 0},
    {input: '91212129', result: 9},
  ]
  const partTwo = [
    {input: '1212', result: 6},
    {input: '1221', result: 0},
    {input: '123425', result: 4},
    {input: '123123', result: 12},
    {input: '12131415', result: 4},
  ]

  partOne.forEach(({input, result}) => {
    test(`Part 1 (next) with input "${input}" to be ${result}`, () => {
      expect(next(input)).toBe(result)
    })
  })

  partTwo.forEach(({input, result}) => {
    test(`Part 2 (halfway around) with input "${input}" to be ${result}`, () => {
      expect(halfwayAround(input)).toBe(result)
    })
  })
})
