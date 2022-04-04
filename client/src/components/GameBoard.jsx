import { createStyles, SimpleGrid } from "@mantine/core"
import { arrayOf, string } from "prop-types"
import GameTile from "./GameTile"

const useStyles = createStyles({
  board: {
    height: "480px",
    width: "400px",
    gridTemplateRows: "repeat(6, 1fr)",
  },
})

const fillGameBoard = (gameBoard) => 
  gameBoard.map((row) => 
    [...row, ...Array(5 - row.length).fill("") ]
  )

const GameBoard = ({ gameBoard }) => {
  const { classes } = useStyles()

  return (
    <SimpleGrid cols={5} spacing="xs" className={classes.board}>
      {fillGameBoard(gameBoard).map((row) =>
        row.map((letter, i) => <GameTile letter={letter} key={i} />)
      )}
    </SimpleGrid>
  )
}

GameBoard.propTypes = {
  gameBoard: arrayOf(arrayOf(string)).isRequired,
}

export default GameBoard
