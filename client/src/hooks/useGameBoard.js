import { useLocalStorageValue } from "@mantine/hooks"
import { evals } from "../constants/qwerty"
import { GET_LETTER_TO_COUNT, IS_WORD } from "../constants/words"

const evaluateRow = (currentRow, correctWord) => {
  const correctLetterToCount = GET_LETTER_TO_COUNT(correctWord.split(""))
  const evaluatedLetterToCount = {}

  let evaluatedRow = currentRow.map(({ letter }, i) => {
    if (correctWord[i] === letter) {
      evaluatedLetterToCount[letter] = ++evaluatedLetterToCount[letter] || 1
      return { letter, evaluation: evals.CORRECT }
    }
  })

  evaluatedRow = currentRow.map(({ letter }, i) => {
    if (evaluatedRow[i]) return evaluatedRow[i]
    if (evaluatedLetterToCount[letter] === correctLetterToCount[letter])
      return { letter, evaluation: evals.UNUSED }
    if (correctWord.includes(letter)) {
      evaluatedLetterToCount[letter] = ++evaluatedLetterToCount[letter] || 1
      return { letter, evaluation: evals.USED }
    }
    return { letter, evaluation: evals.UNUSED }
  })

  return evaluatedRow
}

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
    newGameBoard[rowI] = evaluateRow(gameBoard[rowI], correctWord)
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
