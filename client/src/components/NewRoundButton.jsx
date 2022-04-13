import { Button, createStyles, keyframes } from "@mantine/core"
import { func, oneOf, string } from "prop-types"
import { PlayerPlay as PlayerPlayIcon } from "tabler-icons-react"
import { status } from "../hooks/useRound"

// plays when component mounts
const slideDown = keyframes({
  "0%": { opacity: 0, transform: "translateY(-100%)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
})

const useStyles = createStyles({
  button: {
    position: "absolute",
    top: "10px",

    opacity: 0,
    animation: `${slideDown} 300ms ease 1250ms forwards`,
  },
})

const NewRoundButton = ({ roundStatus, correctWord, onClick }) => {
  const { classes } = useStyles()

  return (
    <Button
      color={roundStatus === status.WIN ? "green" : "red"}
      size="sm"
      variant="outline"
      radius="xl"
      rightIcon={<PlayerPlayIcon size={16} />}
      className={classes.button}
      onClick={onClick}
    >
      {roundStatus === status.WIN
        ? "Correct! Play again"
        : `The word was ${correctWord.toUpperCase()}! Play again`}
    </Button>
  )
}

NewRoundButton.propTypes = {
  roundStatus: oneOf(Object.values(status)).isRequired,
  correctWord: string.isRequired,
  onClick: func.isRequired,
}

export default NewRoundButton
