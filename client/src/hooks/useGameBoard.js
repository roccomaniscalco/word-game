import { useCallback, useState } from "react"
import useKeyboard from "./useKeyboard"

const useGameBoard = () => {
  const [rowI, setRowI] = useState(0)
  const [gameBoard, setGameBoard] = useState([[], [], [], [], [], []])

  const isFullRow = gameBoard[rowI].length === 5
  const isEmptyRow = gameBoard[rowI].length === 0

  const addTile = (tile) => {
    if (isFullRow) return
    const newGameBoard = [...gameBoard]
    newGameBoard[rowI].push(tile)
    setGameBoard(newGameBoard)
  }

  const removeTile = () => {
    if (isEmptyRow) return
    const newGameBoard = [...gameBoard]
    newGameBoard[rowI].pop()
    setGameBoard(newGameBoard)
  }

  const submitRow = () => {
    if (isFullRow && rowI < gameBoard.length - 1) {
      setRowI((prevRowI) => prevRowI + 1)
    }
  }

  const { handleKeyClick } = useKeyboard(addTile, removeTile, submitRow)
  return { gameBoard, handleKeyClick }
}

export default useGameBoard
