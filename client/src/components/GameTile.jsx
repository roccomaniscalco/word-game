import { Card, createStyles, keyframes, Title } from "@mantine/core"
import { string } from "prop-types"
import { letterEvaluation } from "../constants/propTypes"
import { evals } from "../constants/qwerty"

// plays when evaluation is revealed
const flip = keyframes({
  "0%": { transform: "rotateX(0)" },
  "50%": { transform: "rotateX(-90deg)" },
  "100%": { transform: "rotateX(0)" },
})

// plays when letter is typed
const pop = keyframes({
  "0%": { transform: "scale(0.8)", opacity: 0 },
  "40%": { transform: "scale(1.1)", opacity: 1 },
})

const useStyles = createStyles((theme, { hasLetter }) => ({
  tile: {
    color: theme.white,
    textTransform: "uppercase",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderWidth: "0px",
    borderStyle: "solid",
    borderColor: hasLetter ? theme.colors.dark[3] : theme.colors.dark[4],

    animation: hasLetter ? `${pop} 100ms ease-in-out` : undefined,

    // change color and border halfway into flipIn animation
    transitionProperty: "border-width, background-color",
    transitionDuration: "0ms",
    transitionDelay: "250ms",
  },

  [evals.TBD]: {
    backgroundColor: theme.colors.dark[9],
    borderWidth: "2px",
  },
  [evals.UNUSED]: {
    backgroundColor: theme.colors.dark[6],
    animation: `${flip} 500ms ease-in-out`,
  },
  [evals.USED]: {
    backgroundColor: theme.fn.darken(theme.colors.yellow[6], 0.3),
    animation: `${flip} 500ms ease-in-out`,
  },
  [evals.CORRECT]: {
    backgroundColor: theme.fn.darken(theme.colors.green[6], 0.3),
    animation: `${flip} 500ms ease-in-out`,
  },
}))

const GameTile = ({ letter, evaluation }) => {
  const hasLetter = letter.length > 0
  const { classes } = useStyles({ hasLetter })

  return (
    <Card className={`${classes.tile} ${classes[evaluation]}`}>
      <Title order={1}>{letter}</Title>
    </Card>
  )
}

GameTile.propTypes = {
  letter: string.isRequired,
  evaluation: letterEvaluation.isRequired,
}

export default GameTile
