import { AppShell, Container, Stack } from "@mantine/core"
import GameBoard from "./components/GameBoard"
import Keyboard from "./components/Keyboard"
import useGameBoard from "./hooks/useGameBoard"
import useKeyboard from "./hooks/useKeyboard"

function App() {
  const { gameBoard, handleWordSubmit } = useGameBoard()
  const { handleKeyClick } = useKeyboard(handleWordSubmit)

  return (
    <AppShell padding="xs">
      <Container size="xs">
        <Stack align="center">
          <GameBoard gameBoard={gameBoard} />
          <Keyboard onClick={handleKeyClick} />
        </Stack>
      </Container>
    </AppShell>
  )
}

export default App
