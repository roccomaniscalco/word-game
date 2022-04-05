import { useState } from "react"
import qwerty from "../constants/qwerty"

const useKeys = () => {
  const [keys, setKeys] = useState(() =>
    qwerty.LETTERS.reduce(
      (keys, letter) => ({
        ...keys,
        [letter]: "undetermined",
      }),
      {}
    )
  )

  const updateKeys = (row) => {
    const newKeys = { ...keys }
    row.forEach(({ letter, evaluation }) => {
      if (evaluation === "correct") newKeys[letter] = "correct"
      else if (evaluation === "used" && newKeys[letter] !== "correct")
        newKeys[letter] = "used"
      else if (evaluation === "unused" && newKeys[letter] === "undetermined")
        newKeys[letter] = "unused"
    })
    setKeys(newKeys)
  }

  return {
    keys: Object.entries(keys).map(([letter, evaluation]) => ({
      letter, evaluation
    })),
    updateKeys,
  }
}

export default useKeys
