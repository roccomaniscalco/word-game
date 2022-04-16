import { useEffect } from "react"

// accept user input from actual keyboard and on-screen keyboard
const useKeyboard = (addTile, removeTile, submitRow) => {
  const handleKeyClick = (e) => {
    const key = e.target.matches(".key") ? e.target : e.target.closest(".key")
    const code = key?.value.toLocaleLowerCase()

    if (code === "enter") submitRow()
    else if (code === "backspace") removeTile()
    else if (code) addTile(code)
  }

  const handleKeydown = ({ code }) => {
    code = code.toLocaleLowerCase()
    if (code === "enter") submitRow()
    else if (code === "backspace") removeTile()
    else if (code.includes("key")) addTile(code.replace("key", ""))
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown)
    return () => window.removeEventListener("keydown", handleKeydown)
  }, [handleKeydown])

  return { handleKeyClick }
}

export default useKeyboard
