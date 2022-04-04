import { Button, createStyles } from "@mantine/core"
import { func, node, string } from "prop-types"

const useStyles = createStyles((theme, { color }) => ({
  letterContainer: {
    backgroundColor: color ? theme.colors[color] : theme.colors.dark[4],

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "100%",
    padding: 0,

    "&:hover": {
      backgroundColor: color ? theme.colors[color][8] : theme.colors.dark[4],
    },
  },
}))

const Key = ({ children, onClick, code, color, ...props }) => {
  const { classes } = useStyles({ color })

  return (
    <Button
      onClick={() => onClick(code)}
      className={classes.letterContainer}
      uppercase
      {...props}
    >
      {children}
    </Button>
  )
}

Key.propTypes = {
  children: node.isRequired,
  onClick: func.isRequired,
  code: string.isRequired,
  color: string,
}

export default Key
