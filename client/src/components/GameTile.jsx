import { Card, createStyles, keyframes, Title } from "@mantine/core"
import { number } from "prop-types"
import { string } from "prop-types"
import { memo } from "react"
import { letterEvaluation } from "../constants/propTypes"
import { evals } from "../constants/qwerty"

// plays when evaluation is not "tbd"
const flip = keyframes({
  "0%": { transform: "rotateX(0)" },
  "50%": { transform: "rotateX(-90deg)" },
  "100%": { transform: "rotateX(0)" },
})

// plays when letter is not an empty string
const pop = keyframes({
  "0%": { transform: "scale(0.8)", opacity: 0 },
  "40%": { transform: "scale(1.1)", opacity: 1 },
})

const useStyles = createStyles((theme, { hasLetter, colI }) => ({
  tile: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    textTransform: "uppercase",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderWidth: "0px",
    borderStyle: "solid",
    borderColor:
    theme.colorScheme === "dark"
      ? hasLetter
        ? theme.colors.dark[3]
        : theme.colors.dark[4]
      : hasLetter
      ? theme.colors.dark[1]
      : theme.colors.dark[0],

    animation: hasLetter ? `${pop} 100ms` : undefined,

    // delay color and border change until halfway into flip animation
    transitionProperty: "border-width, background-color",
    transitionDuration: "0ms",
    transitionDelay: `${colI * 200 + 250}ms`,
  },

  [evals.TBD]: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[9] : undefined,
    borderWidth: "2px",
  },

  [evals.UNUSED]: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.dark[0],
    animation: `${flip} 500ms ease-in-out ${colI * 200}ms`,
  },

  [evals.USED]: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.darken(theme.colors.yellow[6], 0.3)
        : theme.colors.yellow[6],
    animation: `${flip} 500ms ease-in-out ${colI * 200}ms`,
  },

  [evals.CORRECT]: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.darken(theme.colors.green[6], 0.3)
        : theme.colors.green[6],
    animation: `${flip} 500ms ease-in-out ${colI * 200}ms`,
  },
}))

const GameTile = ({ letter, evaluation, colI }) => {
  const { classes } = useStyles({ hasLetter: Boolean(letter), colI })

  return (
    <Card className={`${classes.tile} ${classes[evaluation]}`}>
      <Title order={1}>{letter}</Title>
    </Card>
  )
}

GameTile.propTypes = {
  letter: string.isRequired,
  evaluation: letterEvaluation.isRequired,
  colI: number.isRequired,
}

export default memo(GameTile)
