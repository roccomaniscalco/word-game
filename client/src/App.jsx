import { AppShell, Container, Stack, Text } from "@mantine/core"
import GameBoard from "./components/GameBoard"
import Keyboard from "./components/Keyboard"
import useGameBoard from "./hooks/useGameBoard"
import useKeyboard from "./hooks/useKeyboard"

function App() {
  const { gameBoard, rowCount, handleWordSubmit } = useGameBoard()
  const { input, handleKeyClick } = useKeyboard(handleWordSubmit)

  return (
    <AppShell padding="xs">
      <Container size="xs">
        <Stack align="center">
          <GameBoard gameBoard={gameBoard} input={input} rowCount={rowCount}  />
          <Keyboard input={input} onClick={handleKeyClick} />
          <Text>{input}</Text>
        </Stack>
      </Container>
    </AppShell>
  )
}

export default App
