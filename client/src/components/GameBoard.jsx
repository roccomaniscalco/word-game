import { createStyles, SimpleGrid } from "@mantine/core"
import { useElementSize } from "@mantine/hooks"
import { gameBoard } from "../constants/propTypes"
import { evals } from "../constants/qwerty"
import GameTile from "./GameTile"

const useStyles = createStyles({
  board: {
    maxWidth: "400px",
    width: "100%",
    gridTemplateRows: "repeat(6, 1fr)",
  },
})

// inject empty tiles to fill out gameBoard as 5x6 matrix
const fillGameBoard = (gameBoard) =>
  gameBoard.map((row) => [
    ...row,
    ...Array(5 - row.length).fill({ letter: "", evaluation: evals.TBD }),
  ])

const GameBoard = ({ gameBoard }) => {
  const { classes } = useStyles()
  const { ref, width } = useElementSize()

  return (
    <SimpleGrid
      cols={5}
      spacing={6}
      className={classes.board}
      style={{ height: width * (6 / 5) }} // preserve aspect ratio
      ref={ref}
    >
      {fillGameBoard(gameBoard).map((row) =>
        row.map((tile, i) => (
          // acceptable use of index for key since row is a consistent size
          <GameTile letter={tile.letter} evaluation={tile.evaluation} colI={i} key={i} />
        ))
      )}
    </SimpleGrid>
  )
}

GameBoard.propTypes = {
  gameBoard: gameBoard.isRequired,
}

export default GameBoard
