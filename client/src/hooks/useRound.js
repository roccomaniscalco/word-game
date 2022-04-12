import { useState } from "react"
import { evals } from "../constants/qwerty"

const useRound = () => {
  const [correctWord] = useState("store")
  const [isRoundOver, setIsRoundOver] = useState(false)

  const evaluateRow = (currentRow) =>
  currentRow.map(({ letter }, i) => {
    if (correctWord.split("")[i] === letter)
      return { letter, evaluation: evals.CORRECT }
    if (correctWord.split("").includes(letter))
      return { letter, evaluation: evals.USED }
    return { letter, evaluation: evals.UNUSED }
  })

  const updateRound = (gameBoard, currentRow) => {
    const currentWord = currentRow.map(({ letter }) => letter).join("")
    if (currentWord === correctWord) setIsRoundOver(true)
    else if (gameBoard[5].length !== 0) setIsRoundOver(true)
  }

  return { correctWord, isRoundOver, evaluateRow, updateRound }
}

export default useRound
