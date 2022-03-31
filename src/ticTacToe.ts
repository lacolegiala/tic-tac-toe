const grid = Array.from(Array(24).fill(''))

export const nextMove = (player: string, square: number) => {
  grid[square] = player
}