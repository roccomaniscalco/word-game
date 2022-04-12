import { useState } from "react"
import { evals } from "../constants/qwerty"
import { IS_WORD } from "../constants/words"

const useGameBoard = (isRoundOver, evaluateRow, updateRound, updateKeys) => {
  const [rowI, setRowI] = useState(0)
  const [gameBoard, setGameBoard] = useState([[], [], [], [], [], []])

  const isFullRow = gameBoard[rowI].length === 5
  const isEmptyRow = gameBoard[rowI].length === 0

  const addTile = (letter) => {
    if (isFullRow || isRoundOver) return
    const newGameBoard = [...gameBoard]
    newGameBoard[rowI].push({ letter, evaluation: evals.TBD })
    setGameBoard(newGameBoard)
  }

  const removeTile = () => {
    if (isEmptyRow || isRoundOver) return
    const newGameBoard = [...gameBoard]
    newGameBoard[rowI].pop()
    setGameBoard(newGameBoard)
  }

  const submitRow = () => {
    if (!IS_WORD(gameBoard[rowI]) || isRoundOver) return
    const newGameBoard = [...gameBoard]
    newGameBoard[rowI] = evaluateRow(gameBoard[rowI])

    setGameBoard(newGameBoard)
    updateKeys(newGameBoard[rowI])
    updateRound(gameBoard, gameBoard[rowI])

    if (rowI < gameBoard.length - 1) setRowI((prevRowI) => prevRowI + 1)
  }

  return {
    gameBoard,
    currentRow: isRoundOver ? [] : gameBoard[rowI],
    addTile,
    removeTile,
    submitRow
  }
}

export default useGameBoard
