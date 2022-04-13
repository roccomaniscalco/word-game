import { useState } from "react"

const useRound = () => {
  const [correctWord] = useState("store")
  const [hasWon, setHasWon] = useState(false)
  const [hasLost, setHasLost] = useState(false)

  const updateRound = (gameBoard, currentRow) => {
    const currentWord = currentRow.map(({ letter }) => letter).join("")
    if (currentWord === correctWord) setHasWon(true)
    else if (gameBoard[5].length !== 0) setHasLost(true)
  }

  return {
    correctWord,
    isRoundOver: hasWon || hasLost,
    hasWon,
    hasLost,
    updateRound,
  }
}

export default useRound
