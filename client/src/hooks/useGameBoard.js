import { useCallback, useState } from "react"
import { IS_A_WORD } from "../constants/words"

const useGameBoard = () => {
  const [rowCount, setRowCount] = useState(0)
  const [gameBoard, setGameBoard] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ])

  const insert = (word, idx) => {
    // functional equivalent of gameBoard[idx] = word
    setGameBoard((prevGameBoard) => [
      ...prevGameBoard.slice(0, idx),
      word,
      ...prevGameBoard.slice(idx + 1),
    ])

    setRowCount((prevRowCount) => prevRowCount + 1)
  }

  const handleWordSubmit = useCallback(
    (word) => {
      // validate gameBoard is not full and word is valid before inserting
      if (rowCount < 6 && IS_A_WORD(word)) insert(word, rowCount)
    },
    [rowCount]
  )

  return { gameBoard, handleWordSubmit }
}

export default useGameBoard
