import { Button, createStyles } from "@mantine/core"
import { func, node, string } from "prop-types"
import { letterEvaluation } from "../constants/propTypes"

const useStyles = createStyles((theme, { color }) => ({
  letterContainer: {
    backgroundColor: theme.colors[color] || theme.colors.dark[4],

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "100%",
    padding: 0,
  },

  unused: { backgroundColor: theme.colors.dark[6] },
  used: { backgroundColor: theme.fn.darken(theme.colors.yellow[6], 0.3) },
  correct: { backgroundColor: theme.fn.darken(theme.colors.green[6], 0.3) },
}))

const Key = ({ children, onClick, code, color, evaluation, ...props }) => {
  const { classes } = useStyles({ color })

  return (
    <Button
      onClick={() => onClick(code)}
      className={`${classes.letterContainer} ${classes[evaluation]}`}
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
  evaluation: letterEvaluation,
}

export default Key
