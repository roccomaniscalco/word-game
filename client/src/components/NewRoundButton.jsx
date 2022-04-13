import { Button, Transition } from "@mantine/core"
import { func, oneOf, string } from "prop-types"
import { ArrowsShuffle2 } from "tabler-icons-react"
import { status } from "../hooks/useRound"

const slideDown = {
  in: { opacity: 1, transform: "translateY(0)" },
  out: { opacity: 0, transform: "translateY(-100%)" },
  common: { transitionDelay: "1250ms" }, // wait until GameTiles are revealed
  transitionProperty: "transform, opacity",
}

const NewRoundButton = ({ roundStatus, correctWord, onClick }) => {
  return (
    <Transition
      mounted={roundStatus !== status.TBD} // only mount when round is over
      transition={slideDown}
      duration={250}
      timingFunction="ease"
    >
      {(styles) => (
        <Button
          color={roundStatus === status.WIN ? "green" : "red"}
          size="sm"
          variant="outline"
          radius="xl"
          rightIcon={<ArrowsShuffle2 size={20} />}
          style={{ ...styles, position: "absolute", top: "10px" }}
          onClick={onClick}
        >
          {roundStatus === status.WIN
            ? "Correct! Start new game"
            : `The word was ${correctWord.toUpperCase()}! Start new game`}
        </Button>
      )}
    </Transition>
  )
}

NewRoundButton.propTypes = {
  roundStatus: oneOf(Object.values(status)).isRequired,
  correctWord: string.isRequired,
  onClick: func.isRequired,
}

export default NewRoundButton
