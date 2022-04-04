import { useCallback, useState } from "react"

const useGameBoard = () => {
  const [rowI, setRowI] = useState(0)
  const [colI, setColI] = useState(0)
  const [gameBoard, setGameBoard] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ])

  const isFullRow = !gameBoard[rowI].includes("")
  const isEmptyRow = gameBoard.join("") === ""

  const addTile = (tile) => {
    if (!isFullRow)
      setGameBoard((prevGameBoard) => {
        const newGameBoard = [...prevGameBoard]
        newGameBoard[colI] = tile
        return newGameBoard
      })
    if (colI < 4) setColI((prevColI) => prevColI + 1)
  }
  const removeTile = () => {
    if (!isEmptyRow)
      setGameBoard((prevGameBoard) => {
        const newGameBoard = [...prevGameBoard]
        newGameBoard[colI] = ""
        return newGameBoard
      })
    if (colI > 0) setColI((prevColI) => prevColI - 1)
  }
  const submitRow = () => {
    if (isFullRow && rowI < gameBoard.length - 1)
      setRowI((prevRowI) => prevRowI + 1)
  }

  const insert = (word, idx) => {
    // functional equivalent of gameBoard[idx] = word
    setGameBoard((prevGameBoard) => [
      ...prevGameBoard.slice(0, idx),
      word,
      ...prevGameBoard.slice(idx + 1),
    ])

    setRowI((prevRowCount) => prevRowCount + 1)
  }

  const handleWordSubmit = useCallback(
    (word) => {
      // validate gameBoard is not full before inserting
      if (rowI < 6) insert(word, rowI)
    },
    [rowI]
  )

  return { gameBoard, rowCount: rowI, handleWordSubmit }
}

export default useGameBoard
