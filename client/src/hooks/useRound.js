import { useState } from "react"
import { GET_RANDOM_WORD } from "../constants/words"

const useRound = () => {
  const [correctWord] = useState(GET_RANDOM_WORD())
  const [isRoundOver, setIsRoundOver] = useState(false)

  const updateRound = (gameBoard, currentRow) => {
    const currentWord = currentRow.map(({ letter }) => letter)
    if (currentWord === correctWord.join("")) setIsRoundOver(true)
    else if (gameBoard[5].length !== 0) setIsRoundOver(true)
  }

  return { correctWord, isRoundOver, updateRound }
}

export default useRound
