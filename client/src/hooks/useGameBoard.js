import { useState } from "react"
import { evals } from "../constants/qwerty"
import { IS_WORD } from "../constants/words"
import useKeyboard from "./useKeyboard"
import useRound from "./useRound"

const correctWord = "store"

// inject empty tiles to fill out gameBoard as 5x6 matrix
const fillGameBoard = (gameBoard) =>
  gameBoard.map((row) => [
    ...row,
    ...Array(5 - row.length).fill({ letter: "", evaluation: evals.TBD }),
  ])

const evaluateRow = (currentRow) =>
  currentRow.map(({ letter }, i) => {
    if (correctWord[i] === letter) return { letter, evaluation: evals.CORRECT }
    if (correctWord.includes(letter)) return { letter, evaluation: evals.USED }
    return { letter, evaluation: evals.UNUSED }
  })

const useGameBoard = (updateKeys) => {
  const { isRoundOver, updateRound } = useRound()
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

  const { handleKeyClick } = useKeyboard(addTile, removeTile, submitRow)
  return {
    gameBoard: fillGameBoard(gameBoard),
    currentRow: isRoundOver ? [] : gameBoard[rowI],
    handleKeyClick,
  }
}

export default useGameBoard
