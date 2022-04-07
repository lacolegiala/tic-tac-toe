export const nextMove = (grid: string[], player: string, square: number) => {
  grid[square] = player
}

const valuesAreTheSame = (values: string[]) => {
  return values.every((value, i, arr) => value === arr[0])
}

export const findWinner = (grid: string[]) => {
  let winner
  while (!winner) {
    for (let i = 0; i < grid.length; i++) {
      if (grid[i] !== '') {
        if (i % 5 === 0) {
          if (valuesAreTheSame([grid[i], grid[i + 1], grid[i + 2], grid[i + 3], grid[i + 4]])) {
            return grid[i]
          }
        }
        if (i < 5) {
          if (valuesAreTheSame([grid[i], grid[i + 5], grid[i + 10], grid[i + 15], grid[i + 20]])) {
            return grid[i]
          }
        }
        if (i === 0) {
          if (valuesAreTheSame([grid[i], grid[i + 6], grid[i + 12], grid[i + 18], grid[i + 24]])) {
            return grid[i]
          }
        }
        if (i === 4) {
          if (valuesAreTheSame([grid[i], grid[i + 4], grid[i + 8], grid[i + 12], grid[i + 16]])) {
            return grid[i]
          }
        }
      }
    }
    winner = 'tie'
  }
  return winner 
}
