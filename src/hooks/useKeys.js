import { useLocalStorageValue } from "@mantine/hooks"
import { evals, LETTERS } from "../constants/qwerty"

const defaultKeys = LETTERS.reduce(
  (keys, letter) => ({ ...keys, [letter]: evals.TBD }),
  {}
)

const useKeys = () => {
  const [keys, setKeys] = useLocalStorageValue({
    key: "keys",
    defaultValue: defaultKeys,
  })

  // update keys to reflect evaluations in currentRow
  const updateKeys = (currentRow) => {
    const newKeys = { ...keys }
    currentRow.forEach(({ letter, evaluation }) => {
      if (evaluation === evals.CORRECT) newKeys[letter] = evals.CORRECT
      else if (evaluation === evals.USED && newKeys[letter] !== evals.CORRECT)
        newKeys[letter] = evals.USED
      else if (evaluation === evals.UNUSED && newKeys[letter] === evals.TBD)
        newKeys[letter] = evals.UNUSED
    })
    setKeys(newKeys)
  }

  const resetKeys = () => {
    setKeys(defaultKeys)
  }

  return {
    keys: Object.entries(keys).map(([letter, evaluation]) => ({
      letter,
      evaluation,
    })),
    updateKeys,
    resetKeys
  }
}

export default useKeys
