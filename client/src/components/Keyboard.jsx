import { Grid, Stack, Text } from "@mantine/core"
import { mergeRefs, useElementSize, useEventListener } from "@mantine/hooks"
import { func } from "prop-types"
import { arrayOf, string } from "prop-types"
import useGuess from "../hooks/useGuess"
import Key from "./Key"

const letters = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
]

// divide letters into the 3 rows of a qwerty keyboard
const firstRow = letters.slice(0, 10)
const secondRow = letters.slice(10, 19)
const thirdRow = letters.slice(19, 26)

const KeyboardRow = ({ row, onClick }) => {
  return (
    <Grid columns={10} gutter={5} justify="center" sx={{ height: "100%" }}>
      {row.map((letter) => (
        <Grid.Col key={letter} span={1}>
          <Key onClick={onClick}>{letter}</Key>
        </Grid.Col>
      ))}
    </Grid>
  )
}

KeyboardRow.propTypes = {
  row: arrayOf(string),
  onClick: func,
}

const Keyboard = () => {
  const { guess, handleKeyClick } = useGuess()
  const { ref, width } = useElementSize()

  return (
    <Stack spacing={5} sx={{ height: width / 3 }} ref={ref}>
      <KeyboardRow row={firstRow} onClick={handleKeyClick} />
      <KeyboardRow row={secondRow} onClick={handleKeyClick} />
      <KeyboardRow row={thirdRow} onClick={handleKeyClick} />
      <Text>{guess.join("")}</Text>
    </Stack>
  )
}

export default Keyboard
