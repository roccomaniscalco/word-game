import { useRef, useState } from "react"

const useRound = () => {
  const correctWord = useRef("store")
  const [isRoundOver, setIsRoundOver] = useState(false)

  const updateRound = (gameBoard, currentRow) => {
    const currentWord = currentRow.map(({ letter }) => letter).join("")
    if (currentWord === correctWord.current) setIsRoundOver(true)
    else if (gameBoard[5].length !== 0) setIsRoundOver(true)
  }

  return { isRoundOver, updateRound }
}

export default useRound
