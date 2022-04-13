import useGameBoard from "./useGameBoard"
import useKeyboard from "./useKeyboard"
import useKeys from "./useKeys"
import useRound from "./useRound"

// only expose hook functionality directly used by UI
const useWordinator = () => {
  const { hasWon, hasLost, isRoundOver, correctWord, updateRound } = useRound()
  const { keys, updateKeys } = useKeys()
  const { gameBoard, currentRow, addTile, removeTile, submitRow } =
    useGameBoard(isRoundOver, correctWord, updateRound, updateKeys)
  const { handleKeyClick } = useKeyboard(addTile, removeTile, submitRow)

  return {
    gameBoard,
    currentRow,
    keys,
    correctWord,
    status: { hasWon, hasLost },
    handleKeyClick,
  }
}

export default useWordinator
