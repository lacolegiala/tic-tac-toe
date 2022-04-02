import { findWinnerHorizontal, nextMove } from "../ticTacToe"

const grid = Array.from(Array(24).fill(''))

describe('Next move function ', () => {
  test('changes the grid when a player makes a move', () => {
    nextMove(grid, 'x', 7)
    expect(grid[7]).toBe('x')
  })

  test('does not change the squares that it is not supposed to', () => {
    nextMove(grid, 'x', 7)
    expect(grid[6]).toBe('')
  })
})

describe('Find winner function', () => {
  test('returns x if x has a row', () => {
    nextMove(grid, 'x', 0)
    nextMove(grid, 'x', 1)
    nextMove(grid, 'x', 2)
    nextMove(grid, 'x', 3)
    nextMove(grid, 'x', 4)
    console.log(grid)
    expect(findWinnerHorizontal(grid)).toBe('x')
  })
})