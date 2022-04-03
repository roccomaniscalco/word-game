import { Grid, Stack, Title } from "@mantine/core"
import { useElementSize } from "@mantine/hooks"
import { arrayOf, func, string } from "prop-types"
import { Backspace as BackspaceIcon } from "tabler-icons-react"
import qwerty from "../constants/qwerty"
import Key from "./Key"
import KeyEnter from "./KeyEnter"

// divide letters into the 3 rows of a qwerty keyboard
const firstRow = qwerty.LETTERS.slice(0, 10)
const secondRow = qwerty.LETTERS.slice(10, 19)
const thirdRow = qwerty.LETTERS.slice(19, 26)

const KeyboardRow = ({ row, onClick, input }) => {
  return (
    <Grid columns={20} gutter={5} justify="center" sx={{ height: "100%" }}>
      {input && (
        <Grid.Col span={3}>
          <KeyEnter onClick={onClick} input={input} />
        </Grid.Col>
      )}
      {row.map((letter) => (
        <Grid.Col key={letter} span={2}>
          <Key onClick={onClick} code={letter}>
            <Title order={4}>{letter}</Title>
          </Key>
        </Grid.Col>
      ))}
      {input && (
        <Grid.Col span={3}>
          <Key onClick={onClick} code="backspace">
            <BackspaceIcon />
          </Key>
        </Grid.Col>
      )}
    </Grid>
  )
}

KeyboardRow.propTypes = {
  row: arrayOf(string).isRequired,
  onClick: func.isRequired,
  input: arrayOf(string),
}

const Keyboard = ({ input, onClick }) => {
  const { ref, width } = useElementSize()

  return (
    <Stack spacing={5} ref={ref} sx={{ height: width / 3, width: "100%" }}>
      <KeyboardRow row={firstRow} onClick={onClick} />
      <KeyboardRow row={secondRow} onClick={onClick} />
      <KeyboardRow row={thirdRow} onClick={onClick} input={input} />
    </Stack>
  )
}

Keyboard.propTypes = {
  input: arrayOf(string),
  onClick: func.isRequired,
}

export default Keyboard
