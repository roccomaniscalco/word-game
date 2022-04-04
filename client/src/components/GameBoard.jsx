import { createStyles, SimpleGrid } from "@mantine/core"
import { gameBoard } from "../constants/propTypes"
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
