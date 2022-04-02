import { Button, createStyles } from "@mantine/core"
import { func, node, string } from "prop-types"

const useStyles = createStyles((theme) => ({
  letterContainer: {
    backgroundColor: theme.colors.dark[5],

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",

    "&:hover": {
      backgroundColor: theme.colors.dark[4],
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
  children: node,
  onClick: func,
  code: string,
}

export default Letter
