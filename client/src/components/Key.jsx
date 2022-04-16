import { Button, createStyles, Title } from "@mantine/core"
import { elementType, func, string } from "prop-types"
import { memo } from "react"
import { letterEvaluation } from "../constants/propTypes"
import { evals } from "../constants/qwerty"

const useStyles = createStyles((theme) => ({
  letterContainer: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[4] : "#e9ecef",
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[4] : "#e9ecef",
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
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.dark[0],
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.dark[0],
    },
  },

  [evals.USED]: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.darken(theme.colors.yellow[6], 0.3)
        : theme.colors.yellow[6],
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.fn.darken(theme.colors.yellow[6], 0.3)
          : theme.colors.yellow[6],
    },
  },

  [evals.CORRECT]: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.darken(theme.colors.green[6], 0.3)
        : theme.colors.green[6],
    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.fn.darken(theme.colors.green[6], 0.3)
          : theme.colors.green[6],
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
