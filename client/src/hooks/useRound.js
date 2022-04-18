import { useLocalStorageValue } from "@mantine/hooks"
import { GET_RANDOM_WORD } from "../constants/words"
import { useStats } from "../contexts/StatsContext"

export const status = {
  WIN: "win",
  LOSE: "lose",
  TBD: "tbd",
}

const useRound = () => {
  const { dispatch } = useStats()
  const [correctWord, setCorrectWord] = useLocalStorageValue({
    key: "correctWord",
    defaultValue: GET_RANDOM_WORD(),
  })
  const [roundStatus, setRoundStatus] = useLocalStorageValue({
    key: "roundStatus",
    defaultValue: status.TBD,
  })

  const win = (guess) => {
    setRoundStatus(status.WIN)
    dispatch({ type: status.WIN, guess: guess })
  }
  const lose = () => {
    setRoundStatus(status.LOSE)
    dispatch({ type: status.LOSE })
  }

  const updateRound = (gameBoard, rowI) => {
    const currentWord = gameBoard[rowI].map(({ letter }) => letter).join("")
    if (currentWord === correctWord) win(rowI + 1) 
    else if (gameBoard[5].length !== 0) lose()
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
    resetRound,
  }
}

export default useRound
