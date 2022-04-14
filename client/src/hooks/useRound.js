import { useLocalStorageValue } from "@mantine/hooks"
import { GET_RANDOM_WORD } from "../constants/words"

export const status = {
  WIN: "win",
  LOSE: "lose",
  TBD: "tbd",
}

const useRound = () => {
  const [correctWord, setCorrectWord] = useLocalStorageValue({
    key: "correctWord",
    defaultValue: GET_RANDOM_WORD(),
  })
  const [roundStatus, setRoundStatus] = useLocalStorageValue({
    key: "roundStatus",
    defaultValue: status.TBD,
  })

  const updateRound = (gameBoard, currentRow) => {
    const currentWord = currentRow.map(({ letter }) => letter).join("")
    if (currentWord === correctWord) setRoundStatus(status.WIN)
    else if (gameBoard[5].length !== 0) setRoundStatus(status.LOSE)
  }

  const resetRound = () => {
    setCorrectWord(GET_RANDOM_WORD())
    setRoundStatus(status.TBD)
  }

  return {
    correctWord,
    isRoundOver: roundStatus !== status.TBD,
    roundStatus,
    updateRound,
    resetRound
  }
}

export default useRound
