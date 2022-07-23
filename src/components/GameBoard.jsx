import { createStyles, SimpleGrid } from "@mantine/core"
import { gameBoard } from "../constants/propTypes"
import { evals } from "../constants/enums"
import GameTile from "./GameTile"

const useStyles = createStyles({
  board: {
    maxWidth: "100%",
    height: "100%",
    maxHeight: "500px",
    gridTemplateRows: "repeat(6, 1fr)",
  },
})

// inject empty tiles to fill out gameBoard as 5x6 matrix
const fillGameBoard = (gameBoard) =>
  gameBoard.map((row) => [
    ...row,
    ...Array(5 - row.length).fill({ letter: "", evaluation: evals.TBD }),
  ])

// find row where every tile is correct
const findWinningRowI = (gameBoard) =>
  gameBoard.findIndex((row) =>
    row.every((tile) => tile.evaluation === evals.CORRECT)
  )

const GameBoard = ({ gameBoard }) => {
  const { classes } = useStyles()
  
  const filledGameBoard = fillGameBoard(gameBoard)
  const winningRowI = findWinningRowI(filledGameBoard)

  return (
    <SimpleGrid
      cols={5}
      spacing={5}
      className={classes.board}
      style={{ aspectRatio: "5/6" }}
    >
      {filledGameBoard.map((row, rowI) =>
        row.map((tile, colI) => (
          <GameTile
            letter={tile.letter}
            evaluation={tile.evaluation}
            shouldBounce={rowI === winningRowI}
            colI={colI}
            key={colI}
          />
        ))
      )}
    </SimpleGrid>
  )
}

GameBoard.propTypes = {
  gameBoard: gameBoard.isRequired,
}

export default GameBoard
