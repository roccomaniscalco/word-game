import { Button, Transition } from "@mantine/core"
import { bool, exact, func, string } from "prop-types"
import { ArrowsShuffle2 } from "tabler-icons-react"

const slideDown = {
  in: { opacity: 1, transform: "translateY(0)" },
  out: { opacity: 0, transform: "translateY(-100%)" },
  common: { transitionDelay: "1250ms" }, // wait until GameTiles are revealed
  transitionProperty: "transform, opacity",
}

const NewRoundButton = ({ status, correctWord, onClick }) => {
  return (
    <Transition
      mounted={status.hasWon || status.hasLost}
      transition={slideDown}
      duration={250}
      timingFunction="ease"
    >
      {(styles) => (
        <Button
          color={status.hasWon ? "green" : "red"}
          size="sm"
          variant="outline"
          radius="xl"
          rightIcon={<ArrowsShuffle2 size={20} />}
          style={{ ...styles, position: "absolute", top: "10px" }}
          onClick={onClick}
        >
          {status.hasWon
            ? "Correct! Start new game"
            : `The word was ${correctWord.toUpperCase()}! Start new game`}
        </Button>
      )}
    </Transition>
  )
}

NewRoundButton.propTypes = {
  status: exact({
    hasWon: bool.isRequired,
    hasLost: bool.isRequired,
  }).isRequired,
  correctWord: string.isRequired,
  onClick: func.isRequired,
}

export default NewRoundButton
