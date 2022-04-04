import { Card, createStyles, Title } from "@mantine/core"
import { string } from "prop-types"
import { tileEvaluation } from "../constants/propTypes"

const useStyles = createStyles((theme, { hasLetter }) => ({
  tile: {
    color: theme.white,
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  undetermined: {
    backgroundColor: theme.colors.dark[9],
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: hasLetter ? theme.colors.dark[3] : theme.colors.dark[5],
  },
  unused: { backgroundColor: theme.colors.dark[5] },
  used: { backgroundColor: theme.fn.darken(theme.colors.yellow[6], 0.3) },
  correct: { backgroundColor: theme.fn.darken(theme.colors.green[6], 0.3) },
}))

const GameTile = ({ letter, evaluation }) => {
  const hasLetter = letter.length > 0
  const { classes } = useStyles({ hasLetter, evaluation })

  return (
    <Card className={`${classes.tile} ${classes[evaluation]}`}>
      <Title order={1}>{letter}</Title>
    </Card>
  )
}

GameTile.propTypes = {
  letter: string.isRequired,
  evaluation: tileEvaluation.isRequired,
}

export default GameTile
