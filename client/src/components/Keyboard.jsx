import { Grid, Stack, Text, Title } from "@mantine/core"
import { useElementSize } from "@mantine/hooks"
import { arrayOf, bool, func, string } from "prop-types"
import { Backspace as BackspaceIcon } from "tabler-icons-react"
import qwerty from "../constants/qwerty"
import useKeyboard from "../hooks/useKeyboard"
import Key from "./Key"

// divide letters into the 3 rows of a qwerty keyboard
const firstRow = qwerty.LETTERS.slice(0, 10)
const secondRow = qwerty.LETTERS.slice(10, 19)
const thirdRow = qwerty.LETTERS.slice(19, 26)

const KeyboardRow = ({ row, onClick, isLastRow }) => {
  return (
    <Grid columns={20} gutter={5} justify="center" sx={{ height: "100%" }}>
      {row.map((letter) => (
        <Grid.Col key={letter} span={2}>
          <Key onClick={onClick} code={letter}>
            <Title order={3}>{letter}</Title>
          </Key>
        </Grid.Col>
      ))}
      {isLastRow && (
        <Grid.Col span={2}>
          <Key onClick={onClick} code="backspace">
            <BackspaceIcon size={28} />
          </Key>
        </Grid.Col>
      )}
    </Grid>
  )
}

KeyboardRow.propTypes = {
  row: arrayOf(string),
  onClick: func,
  isLastRow: bool,
}

const Keyboard = () => {
  const { input, handleKeyClick } = useKeyboard()
  const { ref, width } = useElementSize()

  return (
    <Stack spacing={5} sx={{ height: width / 3 }} ref={ref}>
      <KeyboardRow row={firstRow} onClick={handleKeyClick} />
      <KeyboardRow row={secondRow} onClick={handleKeyClick} />
      <KeyboardRow row={thirdRow} onClick={handleKeyClick} isLastRow />
      <Text>{input.join("")}</Text>
    </Stack>
  )
}

export default Keyboard
