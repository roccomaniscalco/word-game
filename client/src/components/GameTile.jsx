import { Card, createStyles, keyframes, Title } from "@mantine/core"
import { string } from "prop-types"
import { letterEvaluation } from "../constants/propTypes"
import { evals } from "../constants/qwerty"

// execute when evaluation is revealed
const flipIn = keyframes({
  "0%": { transform: "rotateX(0)" },
  "50%": { transform: "rotateX(-90deg)" },
  "100%": { transform: "rotateX(0)" },
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
    
    // execute color and border changes halfway into flipIn animation
    transitionProperty: "border-width, background-color",
    transitionDuration: "0ms",
    transitionDelay: "250ms"
  },

  [evals.TBD]: {
    backgroundColor: theme.colors.dark[9],
    borderWidth: "2px",
  },
  [evals.UNUSED]: {
    backgroundColor: theme.colors.dark[6],
    animation: `${flipIn} 500ms ease-in-out`,
  },
  [evals.USED]: {
    backgroundColor: theme.fn.darken(theme.colors.yellow[6], 0.3),
    animation: `${flipIn} 500ms ease-in-out`,
  },
  [evals.CORRECT]: {
    backgroundColor: theme.fn.darken(theme.colors.green[6], 0.3),
    animation: `${flipIn} 500ms ease-in-out`,
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
