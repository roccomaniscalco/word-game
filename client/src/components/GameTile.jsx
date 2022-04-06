import { Card, createStyles, Title } from "@mantine/core"
import { string } from "prop-types"
import { letterEvaluation } from "../constants/propTypes"
import { evals } from "../constants/qwerty"

const useStyles = createStyles((theme, { hasLetter }) => ({
  tile: {
    color: theme.white,
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  [evals.TBD]: {
    backgroundColor: theme.colors.dark[9],
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: hasLetter ? theme.colors.dark[2] : theme.colors.dark[4],
  },
  [evals.UNUSED]: { backgroundColor: theme.colors.dark[6] },
  [evals.USED]: { backgroundColor: theme.fn.darken(theme.colors.yellow[6], 0.3) },
  [evals.CORRECT]: { backgroundColor: theme.fn.darken(theme.colors.green[6], 0.3) },
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
