import { Card, createStyles, keyframes, Title } from "@mantine/core"
import { number, string } from "prop-types"
import { memo } from "react"
import { letterEvaluation } from "../constants/propTypes"
import { evals } from "../constants/qwerty"
import useEvalColor from "../styles/useEvalColor"

const useStyles = createStyles((theme, { colI, evaluation }) => {
  const evalColor = useEvalColor()

  // plays when evaluation is not "tbd"
  const flip = keyframes({
    "0%": {
      backgroundColor: evalColor.TBD,
      borderWidth: "2px",
      transform: "rotateX(0)",
    },
    "49.99%": {
      backgroundColor: evalColor.TBD,
      borderWidth: "2px",
      transform: "rotateX(-90deg)",
    },
    "50%": {
      backgroundColor: evalColor[evaluation],
      borderWidth: "0px",
    },
    "100%": {
      backgroundColor: evalColor[evaluation],
      borderWidth: "0px",
      transform: "rotateX(0)",
    },
  })

  // plays when letter is not an empty string
  const pop = keyframes({
    "0%": {
      transform: "scale(0.8)",
      opacity: 0,
    },
    "40%": {
      transform: "scale(1.1)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(1)",
      opacity: 1,
      borderColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[3]
          : theme.colors.dark[2],
    },
  })

  return {
    tile: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textTransform: "uppercase",

      backgroundColor: evalColor.TBD,
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.dark[0],
    },

    pop: {
      animation: `${pop} 100ms ease forwards`,
    },

    flip: {
      animation: `${flip} 500ms ease-in-out forwards ${colI * 200}ms`,
    },
  }
})

const GameTile = ({ letter, evaluation, colI }) => {
  const { classes, cx } = useStyles({ evaluation: evaluation, colI })

  return (
    <Card
      className={cx(
        classes.tile,
        Boolean(letter) && classes.pop,
        evaluation !== evals.TBD && classes.flip
      )}
    >
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
