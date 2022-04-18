import { Button, createStyles, keyframes, Title } from "@mantine/core"
import { elementType, string } from "prop-types"
import { memo } from "react"
import { letterEvaluation } from "../constants/propTypes"
import { evals } from "../constants/qwerty"
import useEvalColor from "../styles/useEvalColor"

const useStyles = createStyles((theme, { evaluation }) => {
  const evalColor = useEvalColor()

  // fill after row is revealed
  const fill = keyframes({
    "100%": {
      backgroundColor: evalColor[evaluation],
    },
  })

  return {
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      padding: 0,

      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[2],
      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[2],
      },
    },

    fill: {
      animation: `${fill} 0ms forwards ${1250}ms`,
    },
  }
})

const Key = ({ code, Icon, evaluation, ...props }) => {
  const { classes, cx } = useStyles({ evaluation })

  return (
    <Button
      value={code}
      uppercase
      className={cx(
        classes.button,
        evaluation !== evals.TBD && evaluation !== undefined && classes.fill,
        "key"
      )}
      {...props}
    >
      {Icon ? <Icon /> : <Title order={4}>{code}</Title>}
    </Button>
  )
}

Key.propTypes = {
  code: string.isRequired,
  evaluation: letterEvaluation,
  Icon: elementType,
}

export default memo(Key)
