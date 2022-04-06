import { Grid, Title } from "@mantine/core"
import { useElementSize } from "@mantine/hooks"
import { func } from "prop-types"
import { Backspace as BackspaceIcon } from "tabler-icons-react"
import { gameBoardRow, keys } from "../constants/propTypes"
import Key from "./Key"
import KeyEnter from "./KeyEnter"

const Keyboard = ({ keys, onClick, currentRow }) => {
  const { ref, width } = useElementSize()

  // divide keys into the 3 rows of a qwerty keyboard
  const firstRow = keys.slice(0, 10)
  const secondRow = keys.slice(10, 19)
  const thirdRow = keys.slice(19, 26)

  return (
    <Grid
      columns={20}
      gutter={4}
      justify="center"
      sx={{ height: width / 2.8 }} // preserve aspect ratio
      ref={ref}
    >
      {firstRow.map(({ letter, evaluation }) => (
        <Grid.Col key={letter} span={2}>
          <Key onClick={onClick} code={letter} evaluation={evaluation}>
            <Title order={4}>{letter}</Title>
          </Key>
        </Grid.Col>
      ))}

      {secondRow.map(({ letter, evaluation }) => (
        <Grid.Col key={letter} span={2}>
          <Key onClick={onClick} code={letter} evaluation={evaluation}>
            <Title order={4}>{letter}</Title>
          </Key>
        </Grid.Col>
      ))}

      <Grid.Col span={3}>
        <KeyEnter onClick={onClick} currentRow={currentRow} />
      </Grid.Col>

      {thirdRow.map(({ letter, evaluation }) => (
        <Grid.Col key={letter} span={2}>
          <Key onClick={onClick} code={letter} evaluation={evaluation}>
            <Title order={4}>{letter}</Title>
          </Key>
        </Grid.Col>
      ))}

      <Grid.Col span={3}>
        <Key onClick={onClick} code="backspace">
          <BackspaceIcon />
        </Key>
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
