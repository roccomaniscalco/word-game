import { useCallback, useState } from "react"

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
      // validate gameBoard is not full before inserting
      if (rowCount < 6) insert(word, rowCount)
    },
    [rowCount]
  )

  return { gameBoard, handleWordSubmit }
}

export default useGameBoard