import { useCallback, useEffect, useState } from "react"

const useGuess = () => {
  const [guess, setGuess] = useState([])

  const append = (letter) => {
    setGuess((prevGuess) =>
      prevGuess.length < 5 ? [...prevGuess, letter] : prevGuess
    )
  }
  const pop = () => {
    setGuess((prevGuess) =>
      prevGuess.length > 0 ? prevGuess.slice(0, -1) : prevGuess
    )
  }
  const submit = () => {
    alert(guess)
  }

  const handleKeydown = ({ code }) => {
    code = code.toLocaleLowerCase()
    if (code === "enter") submit()
    else if (code === "backspace") pop()
    else if (code.includes("key")) append(code.replace("key", ""))
  }

  const handleKeyClick = useCallback((code) => {
    if (code === "enter") submit()
    else if (code === "backspace") pop()
    else append(code)
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown)
    return () => window.removeEventListener("keydown", handleKeydown)
  }, [guess, setGuess])

  return { guess, handleKeyClick }
}

export default useGuess
