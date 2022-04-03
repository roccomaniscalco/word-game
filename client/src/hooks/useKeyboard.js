import { useCallback, useEffect, useState } from "react"

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

  const handleKeydown = ({ code }) => {
    code = code.toLocaleLowerCase()
    // submit word on enter
    if (code === "enter") onWordSubmit(input)
    else if (code === "backspace") pop()
    else if (code.includes("key")) append(code.replace("key", ""))
  }

  const handleKeyClick = useCallback((code) => {
    code = code.toLocaleLowerCase()
    if (code === "backspace") pop()
    else append(code)
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown)
    return () => window.removeEventListener("keydown", handleKeydown)
    // must reattach keydown listener when input changes
  }, [input, setInput])

  return { input, handleKeyClick }
}

export default useKeyboard
