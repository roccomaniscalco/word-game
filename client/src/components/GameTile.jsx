import { Card, createStyles, Title, Transition } from "@mantine/core"
import { string } from "prop-types"
import React from "react"

const useStyles = createStyles((theme, { hasLetter }) => ({
  tile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    textTransform: "uppercase",

    backgroundColor: theme.colors.dark[8],

    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: hasLetter ? theme.colors.dark[3] : theme.colors.dark[5],
  },
}))

const GameTile = ({ letter }) => {
  const hasLetter = letter.length > 0
  const { classes } = useStyles({ hasLetter })

  return (
    <Card className={classes.tile}>
      <Transition mounted={hasLetter} transition="pop">
        {(styles) => (
          <Title styles={{ ...styles }} order={2}>
            {letter}
          </Title>
        )}
      </Transition>
    </Card>
  )
}

GameTile.propTypes = {
  letter: string,
}

export default GameTile
