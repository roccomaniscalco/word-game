import { useState } from "react"
import { GET_RANDOM_WORD } from "../constants/words"

export const status = {
  WIN: "win",
  LOSE: "lose",
  TBD: "tbd",
}

const useRound = () => {
  const [correctWord] = useState(GET_RANDOM_WORD())
  const [roundStatus, setRoundStatus] = useState(status.TBD)

  const updateRound = (gameBoard, currentRow) => {
    const currentWord = currentRow.map(({ letter }) => letter).join("")
    if (currentWord === correctWord) setRoundStatus(status.WIN)
    else if (gameBoard[5].length !== 0) setRoundStatus(status.LOSE)
  }

  return {
    correctWord,
    isRoundOver: roundStatus !== status.TBD,
    roundStatus,
    updateRound,
  }
}

export default useRound
