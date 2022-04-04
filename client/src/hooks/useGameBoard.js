import { useState } from "react"
import { IS_WORD } from "../constants/words"
import useKeyboard from "./useKeyboard"

const correctWord = "store"

const fillGameBoard = (gameBoard) =>
  gameBoard.map((row) => [
    ...row,
    ...Array(5 - row.length).fill({ letter: "", evaluation: "undetermined" }),
  ])

const evaluateRow = (currentRow) =>
  currentRow.map(({ letter }, i) => {
    if (correctWord[i] === letter)
      return {
        letter,
        evaluation: "correct",
      }
    if (correctWord.includes(letter))
      return {
        letter,
        evaluation: "used",
      }
    return {
      letter,
      evaluation: "unused",
    }
  })

const useGameBoard = () => {
  const [rowI, setRowI] = useState(0)
  const [gameBoard, setGameBoard] = useState([[], [], [], [], [], []])

  const isFullRow = gameBoard[rowI].length === 5
  const isEmptyRow = gameBoard[rowI].length === 0

  const addTile = (letter) => {
    if (isFullRow) return
    const newGameBoard = [...gameBoard]
    newGameBoard[rowI].push({ letter, evaluation: "undetermined" })
    setGameBoard(newGameBoard)
  }

  const removeTile = () => {
    if (isEmptyRow) return
    const newGameBoard = [...gameBoard]
    newGameBoard[rowI].pop()
    setGameBoard(newGameBoard)
  }

  const submitRow = () => {
    // validate word before submitting
    if (IS_WORD(gameBoard[rowI])) {
      const newGameBoard = [...gameBoard]
      newGameBoard[rowI] = evaluateRow(gameBoard[rowI])
      setGameBoard(newGameBoard)
    }

    if (rowI < gameBoard.length - 1) setRowI((prevRowI) => prevRowI + 1)
  }

  const { handleKeyClick } = useKeyboard(addTile, removeTile, submitRow)
  return {
    gameBoard: fillGameBoard(gameBoard),
    currentRow: gameBoard[rowI],
    handleKeyClick,
  }
}

export default useGameBoard
