import { useLocalStorageValue } from "@mantine/hooks"
import { evals } from "../constants/qwerty"
import { EVALUATE_ROW, IS_WORD } from "../constants/words"

const useGameBoard = (isRoundOver, correctWord, updateRound, updateKeys) => {
  const [rowI, setRowI] = useLocalStorageValue({ key: "rowI", defaultValue: 0 })
  const [gameBoard, setGameBoard] = useLocalStorageValue({
    key: "gameBoard",
    defaultValue: [[], [], [], [], [], []],
  })
  
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
    newGameBoard[rowI] = EVALUATE_ROW(gameBoard[rowI], correctWord)
    setGameBoard(newGameBoard)

    updateKeys(newGameBoard[rowI])
    updateRound(newGameBoard, rowI)

    if (rowI < gameBoard.length - 1) setRowI((prevRowI) => prevRowI + 1)
  }

  const resetGameBoard = () => {
    setGameBoard([[], [], [], [], [], []])
    setRowI(0)
  }

  return {
    gameBoard,
    currentRow: isRoundOver ? [] : gameBoard[rowI],
    addTile,
    removeTile,
    submitRow,
    resetGameBoard,
  }
}

export default useGameBoard
