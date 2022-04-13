import useGameBoard from "./useGameBoard"
import useKeyboard from "./useKeyboard"
import useKeys from "./useKeys"
import useRound from "./useRound"

// only expose hook functionality directly used by UI
const useWordinator = () => {
  const { roundStatus, isRoundOver, correctWord, updateRound } = useRound()
  const { keys, updateKeys } = useKeys()
  const { gameBoard, currentRow, addTile, removeTile, submitRow } =
    useGameBoard(isRoundOver, correctWord, updateRound, updateKeys)
  const { handleKeyClick } = useKeyboard(addTile, removeTile, submitRow)

  return {
    gameBoard,
    currentRow,
    keys,
    correctWord,
    roundStatus,
    handleKeyClick,
  }
}

export default useWordinator
