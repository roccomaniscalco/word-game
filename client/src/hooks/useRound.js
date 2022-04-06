import { useState } from "react"

const useRound = () => {
  const [correctWord] = useState("store".split(""))
  const [isRoundOver, setIsRoundOver] = useState(false)

  const updateRound = (gameBoard, currentRow) => {
    const currentWord = currentRow.map(({ letter }) => letter).join("")
    if (currentWord === correctWord.join("")) setIsRoundOver(true)
    else if (gameBoard[5].length !== 0) setIsRoundOver(true)
  }

  return { correctWord, isRoundOver, updateRound }
}

export default useRound
