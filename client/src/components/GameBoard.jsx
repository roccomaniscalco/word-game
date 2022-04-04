import { createStyles, SimpleGrid } from "@mantine/core"
import { number } from "prop-types"
import { arrayOf, string } from "prop-types"
import GameTile from "./GameTile"

const useStyles = createStyles({
  board: {
    height: "480px",
    width: "400px",
    gridTemplateRows: "repeat(6, 1fr)",
  },
})

const insertInputIntoGameBoard = (input, gameBoard, rowCount) => {
  const newGameBoard = [...gameBoard]
  newGameBoard[rowCount] = [...input, ...Array(5 - input.length).fill("")]
  return newGameBoard
}

const GameBoard = ({ rowCount, input, gameBoard }) => {
  const { classes } = useStyles()

  const newGameBoard = insertInputIntoGameBoard(input, gameBoard, rowCount)

  return (
    <SimpleGrid cols={5} spacing="xs" className={classes.board}>
      {newGameBoard.map((row) =>
        row.map((letter, i) => <GameTile letter={letter} key={i} />)
      )}
    </SimpleGrid>
  )
}

GameBoard.propTypes = {
  rowCount: number,
  input: arrayOf(string),
  gameBoard: arrayOf(arrayOf(string)),
}

export default GameBoard
