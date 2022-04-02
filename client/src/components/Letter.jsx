import { createStyles, Title, Button } from "@mantine/core"
import { string } from "prop-types"

const useStyles = createStyles((theme) => ({
  letterContainer: {
    backgroundColor: theme.colors.dark[5],
    borderRadius: theme.radius.md,
    paddingInline: theme.spacing.md,
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: theme.colors.dark[4],
    },
  },
}))

const Letter = ({ char }) => {
  const { classes } = useStyles()

  return (
    <Button size="lg" className={classes.letterContainer}>
      <Title order={3}>{char}</Title>
    </Button>
  )
}

Letter.propTypes = {
  char: string,
}

export default Letter
