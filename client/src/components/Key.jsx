import { Button, createStyles } from "@mantine/core"
import { func, string } from "prop-types"

const useStyles = createStyles((theme) => ({
  letterContainer: {
    backgroundColor: theme.colors.dark[5],
    borderRadius: theme.radius.md,

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

const Letter = ({ children, onClick, code }) => {
  const { classes } = useStyles()

  return (
    <Button
      onClick={() => onClick(code)}
      className={classes.letterContainer}
      uppercase
    >
      {children}
    </Button>
  )
}

Letter.propTypes = {
  children: string,
  onClick: func,
  code: string,
}

export default Letter
