export const nextMove = (grid: string[], player: string, square: number) => {
  grid[square] = player
}

export const findWinnerHorizontal = (grid: string[]) => {
  let winner
  while (!winner) {
    for (let i = 0; i < grid.length; i++) {
      if (i % 5 === 0 && grid[i] !== '') {
        if ([grid[i], grid[i + 1], grid[i + 2], grid[i + 3], grid[i + 4]].every((value, i, arr) => value === arr[0])) {
          return grid[i]
        }
      }
    }
    winner = 'tie'
  }
  return winner 
}
