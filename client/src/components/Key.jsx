import { Button, createStyles, Title } from "@mantine/core"
import { func, string } from "prop-types"

const useStyles = createStyles((theme) => ({
  letterContainer: {
    backgroundColor: theme.colors.dark[5],
    borderRadius: theme.radius.sm,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",

    "&:hover": {
      backgroundColor: theme.fn.lighten(theme.colors.dark[5], 0.1),
    },
  },
}))

const Letter = ({ children, onClick }) => {
  const { classes } = useStyles()

  return (
    <Button
      onClick={() => onClick(children)}
      className={classes.letterContainer}
      uppercase
    >
      <Title order={3}>{children}</Title>
    </Button>
  )
}

Letter.propTypes = {
  children: string,
  onClick: func,
}

export default Letter
