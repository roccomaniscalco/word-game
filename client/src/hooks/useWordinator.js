import useGameBoard from "./useGameboard"
import useKeyboard from "./useKeyboard"
import useKeys from "./useKeys"
import useRound from "./useRound"

// only expose hook functionality directly used by UI
const useWordinator = () => {
  const { isRoundOver, correctWord, updateRound } = useRound()
  const { keys, updateKeys } = useKeys()
  const { gameBoard, currentRow, addTile, removeTile, submitRow } =
    useGameBoard(isRoundOver, correctWord, updateRound, updateKeys)
  const { handleKeyClick } = useKeyboard(addTile, removeTile, submitRow)

  return { gameBoard, currentRow, keys, handleKeyClick }
}

export default useWordinator