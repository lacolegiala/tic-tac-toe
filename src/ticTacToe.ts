export const nextMove = (grid: string[], player: string, square: number) => {
  grid[square] = player
}

export const findWinnerHorizontal = (grid: string[]) => {
  let winner = 'tie'
  for (let i = 0; i < grid.length; i++) {
    if (i % 5 === 0) {
      if (grid[i] !== '') {
        for (let j = i + 1; j < i + 5; j++) {
          if (grid[j] !== grid[i]) {
            break;
          }
        }
        winner = grid[i]
      }
    }
  }
  return winner 
}
