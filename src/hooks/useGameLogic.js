import useGameBoard from "./useGameBoard"
import useKeyboard from "./useKeyboard"
import useKeys from "./useKeys"
import useRound from "./useRound"

// only expose hook functionality directly used by UI
const useGameLogic = () => {
  const { roundStatus, isRoundOver, correctWord, updateRound, resetRound } =
    useRound()
  const { keys, updateKeys, resetKeys } = useKeys()
  const {
    gameBoard,
    currentRow,
    addTile,
    removeTile,
    submitRow,
    resetGameBoard,
  } = useGameBoard(isRoundOver, correctWord, updateRound, updateKeys)
  const { handleKeyClick } = useKeyboard(addTile, removeTile, submitRow)

  const resetWordinator = () => {
    resetRound()
    resetKeys()
    resetGameBoard()
  }

  return {
    gameBoard,
    currentRow,
    keys,
    correctWord,
    roundStatus,
    handleKeyClick,
    resetWordinator,
  }
}

export default useGameLogic
