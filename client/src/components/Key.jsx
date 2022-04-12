import { Button, createStyles, Title } from "@mantine/core"
import { elementType, func, string } from "prop-types"
import { memo } from "react"
import { letterEvaluation } from "../constants/propTypes"
import { evals } from "../constants/qwerty"

const useStyles = createStyles((theme) => ({
  letterContainer: {
    backgroundColor: theme.colors.dark[4],
    "&:hover": {
      backgroundColor: theme.colors.dark[4],
    },

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "100%",
    padding: 0,

    // delay color change until after gameTiles are flipped
    transitionProperty: "background-color",
    transitionDuration: "0ms",
    transitionDelay: "1250ms",
  },

  [evals.UNUSED]: {
    backgroundColor: theme.colors.dark[6],
    "&:hover": {
      backgroundColor: theme.colors.dark[6],
    },
  },
  [evals.USED]: {
    backgroundColor: theme.fn.darken(theme.colors.yellow[6], 0.3),
    "&:hover": {
      backgroundColor: theme.fn.darken(theme.colors.yellow[6], 0.3),
    },
  },
  [evals.CORRECT]: {
    backgroundColor: theme.fn.darken(theme.colors.green[6], 0.3),
    "&:hover": {
      backgroundColor: theme.fn.darken(theme.colors.green[6], 0.3),
    },
  },
}))

const Key = ({ onClick, code, Icon, evaluation, ...props }) => {
  const { classes } = useStyles()

  return (
    <Button
      value={code}
      onClick={onClick}
      className={`${classes.letterContainer} ${classes[evaluation]}`}
      uppercase
      {...props}
    >
      {Icon ? <Icon /> : <Title order={4}>{code}</Title>}
    </Button>
  )
}

Key.propTypes = {
  onClick: func.isRequired,
  code: string.isRequired,
  evaluation: letterEvaluation,
  Icon: elementType,
}

export default memo(Key)
