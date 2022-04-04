import { Grid, Stack, Title } from "@mantine/core"
import { useElementSize } from "@mantine/hooks"
import { func, node } from "prop-types"
import { Backspace as BackspaceIcon } from "tabler-icons-react"
import qwerty from "../constants/qwerty"
import { gameBoardRow } from "../constants/propTypes"
import Key from "./Key"
import KeyEnter from "./KeyEnter"

// divide letters into the 3 rows of a qwerty keyboard
const firstRow = qwerty.LETTERS.slice(0, 10)
const secondRow = qwerty.LETTERS.slice(10, 19)
const thirdRow = qwerty.LETTERS.slice(19, 26)

const KeyboardRow = ({ children }) => {
  return (
    <Grid columns={20} gutter={5} justify="center" sx={{ height: "100%" }}>
      {children}
    </Grid>
  )
}

KeyboardRow.propTypes = {
  children: node,
}

const Keyboard = ({ onClick, currentRow }) => {
  const { ref, width } = useElementSize()

  return (
    <Stack spacing={5} ref={ref} sx={{ height: width / 3, width: "100%" }}>
      <KeyboardRow>
        {firstRow.map((letter) => (
          <Grid.Col key={letter} span={2}>
            <Key onClick={onClick} code={letter}>
              <Title order={4}>{letter}</Title>
            </Key>
          </Grid.Col>
        ))}
      </KeyboardRow>

      <KeyboardRow>
        {secondRow.map((letter) => (
          <Grid.Col key={letter} span={2}>
            <Key onClick={onClick} code={letter}>
              <Title order={4}>{letter}</Title>
            </Key>
          </Grid.Col>
        ))}
      </KeyboardRow>

      <KeyboardRow>
        <Grid.Col span={3}>
          <KeyEnter onClick={onClick} currentRow={currentRow} />
        </Grid.Col>
        {thirdRow.map((letter) => (
          <Grid.Col key={letter} span={2}>
            <Key onClick={onClick} code={letter}>
              <Title order={4}>{letter}</Title>
            </Key>
          </Grid.Col>
        ))}
        <Grid.Col span={3}>
          <Key onClick={onClick} code="backspace">
            <BackspaceIcon />
          </Key>
        </Grid.Col>
      </KeyboardRow>
    </Stack>
  )
}

Keyboard.propTypes = {
  onClick: func.isRequired,
  currentRow: gameBoardRow.isRequired,
}

export default Keyboard
