import { Card, createStyles, Title } from "@mantine/core"
import { string } from "prop-types"

const useStyles = createStyles((theme, { hasLetter }) => ({
  tile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: theme.colors.dark[8],

    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: hasLetter ? theme.colors.dark[3] : theme.colors.dark[5],

    textTransform: "uppercase",
  },
}))

const GameTile = ({ letter }) => {
  const hasLetter = letter.length > 0
  const { classes } = useStyles({ hasLetter })

  return (
    <Card className={classes.tile}>
      <Title order={2}>{letter}</Title>
    </Card>
  )
}

GameTile.propTypes = {
  letter: string.isRequired,
}

export default GameTile
