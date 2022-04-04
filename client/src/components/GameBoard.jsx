import { createStyles, SimpleGrid } from "@mantine/core"
import { useElementSize } from "@mantine/hooks"
import { gameBoard } from "../constants/propTypes"
import GameTile from "./GameTile"

const useStyles = createStyles({
  board: {
    maxWidth: "400px",
    width: "100%",
    gridTemplateRows: "repeat(6, 1fr)",
  },
})

const GameBoard = ({ gameBoard }) => {
  const { classes } = useStyles()
  const { ref, width } = useElementSize()

  return (
    <SimpleGrid
      cols={5}
      spacing={6}
      className={classes.board}
      sx={{ height: width * (6 / 5) }} // preserve aspect ratio
      ref={ref}
    >
      {gameBoard.map((row) =>
        row.map((tile, i) => (
          <GameTile letter={tile.letter} evaluation={tile.evaluation} key={i} />
        ))
      )}
    </SimpleGrid>
  )
}

GameBoard.propTypes = {
  gameBoard: gameBoard.isRequired,
}

export default GameBoard
