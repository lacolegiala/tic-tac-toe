import { findWinner, nextMove } from "../ticTacToe"

describe('Next move function ', () => {
  const grid = Array.from(Array(24).fill(''))
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
    const grid = Array.from(Array(24).fill(''))
    nextMove(grid, 'x', 0)
    nextMove(grid, 'x', 1)
    nextMove(grid, 'x', 2)
    nextMove(grid, 'x', 3)
    nextMove(grid, 'x', 4)
    expect(findWinner(grid)).toBe('x')
  })
  
  test('returns o if o has a row', () => {
    const grid = Array.from(Array(24).fill(''))
    nextMove(grid, 'o', 5)
    nextMove(grid, 'o', 6)
    nextMove(grid, 'o', 7)
    nextMove(grid, 'o', 8)
    nextMove(grid, 'o', 9)
    expect(findWinner(grid)).toBe('o')
  })
  
  test('returns x if x has a column', () => {
    const grid = Array.from(Array(24).fill(''))
    nextMove(grid, 'x', 0)
    nextMove(grid, 'x', 5)
    nextMove(grid, 'x', 10)
    nextMove(grid, 'x', 15)
    nextMove(grid, 'x', 20)
    expect(findWinner(grid)).toBe('x')
  })
  
  test('returns o if o has a column', () => {
    const grid = Array.from(Array(24).fill(''))
    nextMove(grid, 'o', 0)
    nextMove(grid, 'o', 5)
    nextMove(grid, 'o', 10)
    nextMove(grid, 'o', 15)
    nextMove(grid, 'o', 20)
    expect(findWinner(grid)).toBe('o')
  })

  test('returns x if x has a diagonal row', () => {
    const grid = Array.from(Array(24).fill(''))
    nextMove(grid, 'x', 0)
    nextMove(grid, 'x', 6)
    nextMove(grid, 'x', 12)
    nextMove(grid, 'x', 18)
    nextMove(grid, 'x', 24)
    expect(findWinner(grid)).toBe('x')
  })

  test('returns o if o has a diagonal row', () => {
    const grid = Array.from(Array(24).fill(''))
    nextMove(grid, 'o', 4)
    nextMove(grid, 'o', 8)
    nextMove(grid, 'o', 12)
    nextMove(grid, 'o', 16)
    nextMove(grid, 'o', 20)
    expect(findWinner(grid)).toBe('o')
  })

  test('returns tie if there are no rows', () => {
    const grid = Array.from(Array(24).fill(''))
    nextMove(grid, 'o', 5)
    nextMove(grid, 'o', 6)
    nextMove(grid, 'o', 7)
    nextMove(grid, 'x', 8)
    nextMove(grid, 'o', 9)
    expect(findWinner(grid)).toBe('tie')
  })
})