import { nextMove } from "../ticTacToe"

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