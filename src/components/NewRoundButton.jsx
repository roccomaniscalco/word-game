import { Button, createStyles, keyframes } from "@mantine/core"
import { func, string } from "prop-types"
import { PlayerPlay as PlayerPlayIcon } from "tabler-icons-react"
import { status } from "../constants/enums"
import { roundStatus } from "../constants/propTypes"

// plays when component mounts
const slideDown = keyframes({
  "0%": { opacity: 0, transform: "translateY(-100%)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
})

const useStyles = createStyles({
  button: {
    position: "absolute",
    top: 0,
    zIndex: 100,

    opacity: 0,
    animation: `${slideDown} 250ms ease 1300ms forwards`,
  },
})

const NewRoundButton = ({ roundStatus, correctWord, onClick }) => {
  const { classes } = useStyles()

  return (
    <Button
      color={roundStatus === status.WIN ? "blue" : "red"}
      size="sm"
      variant="filled"
      radius="md"
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
  roundStatus: roundStatus.isRequired,
  correctWord: string.isRequired,
  onClick: func.isRequired,
}

export default NewRoundButton
