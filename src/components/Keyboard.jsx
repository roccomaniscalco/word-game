import { Grid } from "@mantine/core"
import { func } from "prop-types"
import { Backspace as BackspaceIcon } from "tabler-icons-react"
import { gameBoardRow, keys } from "../constants/propTypes"
import Key from "./Key"
import KeyEnter from "./KeyEnter"

const Keyboard = ({ keys, onClick, currentRow }) => {
  // divide keys into the 3 rows of a qwerty keyboard
  const firstRow = keys.slice(0, 10)
  const secondRow = keys.slice(10, 19)
  const thirdRow = keys.slice(19, 26)

  return (
    <Grid
      onClick={onClick}
      columns={20}
      gutter={4}
      justify="center"
      style={{ aspectRatio: "9/3" }}
    >
      {firstRow.map(({ letter, evaluation }) => (
        <Grid.Col key={letter} span={2}>
          <Key code={letter} evaluation={evaluation} />
        </Grid.Col>
      ))}

      {secondRow.map(({ letter, evaluation }) => (
        <Grid.Col key={letter} span={2}>
          <Key code={letter} evaluation={evaluation} />
        </Grid.Col>
      ))}

      <Grid.Col span={3}>
        <KeyEnter currentRow={currentRow} />
      </Grid.Col>

      {thirdRow.map(({ letter, evaluation }) => (
        <Grid.Col key={letter} span={2}>
          <Key code={letter} evaluation={evaluation} />
        </Grid.Col>
      ))}

      <Grid.Col span={3}>
        <Key code="backspace" Icon={BackspaceIcon} aria-label="Backspace" />
      </Grid.Col>
    </Grid>
  )
}

Keyboard.propTypes = {
  keys: keys.isRequired,
  onClick: func.isRequired,
  currentRow: gameBoardRow.isRequired,
}

export default Keyboard
