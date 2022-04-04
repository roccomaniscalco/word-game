import { createStyles, SimpleGrid } from "@mantine/core"
import { arrayOf, shape, string } from "prop-types"
import GameTile from "./GameTile"

const useStyles = createStyles({
  board: {
    height: "480px",
    width: "400px",
    gridTemplateRows: "repeat(6, 1fr)",
  },
})

const GameBoard = ({ gameBoard }) => {
  const { classes } = useStyles()

  return (
    <SimpleGrid cols={5} spacing="xs" className={classes.board}>
      {gameBoard.map((row) =>
        row.map((tile, i) => <GameTile letter={tile?.letter} key={i} />)
      )}
    </SimpleGrid>
  )
}

GameBoard.propTypes = {
  gameBoard: arrayOf(
    arrayOf(shape({ letter: string.isRequired, evaluation: string.isRequired }))
  ).isRequired,
}

export default GameBoard
