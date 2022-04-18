import { Divider, Text } from "@mantine/core"
import { Help as HelpIcon } from "tabler-icons-react"
import { evals } from "../../constants/qwerty"
import AppModal from "../common/AppModal"
import InstructionsExplicitWarning from "./InstructionsExplicitWarning"
import InstructionsGameRow from "./InstructionsGameRow"

const exampleRow1 = [
  { letter: "v", evaluation: evals.CORRECT },
  { letter: "o", evaluation: evals.TBD },
  { letter: "i", evaluation: evals.TBD },
  { letter: "c", evaluation: evals.TBD },
  { letter: "e", evaluation: evals.TBD },
]

const exampleRow2 = [
  { letter: "s", evaluation: evals.TBD },
  { letter: "t", evaluation: evals.USED },
  { letter: "a", evaluation: evals.TBD },
  { letter: "r", evaluation: evals.TBD },
  { letter: "s", evaluation: evals.TBD },
]

const exampleRow3 = [
  { letter: "g", evaluation: evals.TBD },
  { letter: "l", evaluation: evals.TBD },
  { letter: "y", evaluation: evals.TBD },
  { letter: "p", evaluation: evals.UNUSED },
  { letter: "h", evaluation: evals.TBD },
]

const Instructions = () => {
  return (
    <AppModal Icon={HelpIcon} title="instructions">
      <Text size="sm" pb="xs">
        Guess the word in six tries.
      </Text>
      <Text size="sm" pb="xs">
        Each guess must be a valid five-letter word. Hit the enter button to
        submit.
      </Text>
      <Text size="sm" pb="xl">
        After each guess, the color of the tiles will change to show how close
        your guess was to the word.
      </Text>

      <Divider size="sm" pb="md" />
      <InstructionsGameRow row={exampleRow1} />
      <Text size="sm" pt="xs" pb="xl">
        The letter <span style={{ fontWeight: 700 }}>V</span> is in the word and
        in the correct spot.
      </Text>
      <InstructionsGameRow row={exampleRow2} />
      <Text size="sm" pt="xs" pb="xl">
        The letter <span style={{ fontWeight: 700 }}>T</span> is in the word but
        in the wrong spot.
      </Text>
      <InstructionsGameRow row={exampleRow3} />
      <Text size="sm" pt="xs" pb="xl">
        The letter <span style={{ fontWeight: 700 }}>P</span> is not in the word
        in any spot.
      </Text>
      <Divider size="sm" pb="xl" />

      <InstructionsExplicitWarning />
    </AppModal>
  )
}

export default Instructions
