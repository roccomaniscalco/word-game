import { useCallback, useEffect, useState } from "react"
import { IS_A_WORD } from "../constants/words"

// accept user input from actual keyboard and on-screen keyboard
const useKeyboard = (onWordSubmit) => {
  const [input, setInput] = useState([])

  const append = (letter) => {
    setInput((prevGuess) =>
      prevGuess.length < 5 ? [...prevGuess, letter] : prevGuess
    )
  }
  const pop = () => {
    setInput((prevGuess) => prevGuess.slice(0, -1))
  }
  const submit = () => {
    // validate input is a word before submitting
    if (IS_A_WORD(input)) {
      onWordSubmit(input)
      setInput([])
    }
  }

  const handleKeydown = ({ code }) => {
    code = code.toLocaleLowerCase()
    if (code === "enter") submit()
    else if (code === "backspace") pop()
    else if (code.includes("key")) append(code.replace("key", ""))
  }

  const handleKeyClick = useCallback(
    (code) => {
      code = code.toLocaleLowerCase()
      if (code === "enter") submit()
      else if (code === "backspace") pop()
      else append(code)
    },
    [submit, pop, append]
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown)
    return () => window.removeEventListener("keydown", handleKeydown)
    // must reattach keydown listener when input changes
  }, [handleKeydown])

  return { input, handleKeyClick }
}

export default useKeyboard
