import { useState } from "react"
import { evals, LETTERS } from "../constants/qwerty"

const useKeys = () => {
  const [keys, setKeys] = useState(() =>
    LETTERS.reduce((keys, letter) => ({ ...keys, [letter]: evals.TBD }), {})
  )

  // update keys to reflect evaluations in row
  const updateKeys = (row) => {
    const newKeys = { ...keys }
    row.forEach(({ letter, evaluation }) => {
      if (evaluation === evals.CORRECT) newKeys[letter] = evals.CORRECT
      else if (evaluation === evals.USED && newKeys[letter] !== evals.CORRECT)
        newKeys[letter] = evals.USED
      else if (evaluation === evals.UNUSED && newKeys[letter] === evals.TBD)
        newKeys[letter] = evals.UNUSED
    })
    setKeys(newKeys)
  }

  return {
    keys: Object.entries(keys).map(([letter, evaluation]) => ({
      letter,
      evaluation,
    })),
    updateKeys,
  }
}

export default useKeys
