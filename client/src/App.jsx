import { AppShell, Container, Stack } from "@mantine/core"
import GameBoard from "./components/GameBoard"
import Keyboard from "./components/Keyboard"
import SubmitButton from "./components/SubmitButton"
import useGameBoard from "./hooks/useGameBoard"
import useKeyboard from "./hooks/useKeyboard"

function App() {
  const { gameBoard, handleWordSubmit } = useGameBoard()
  const { input, handleKeyClick } = useKeyboard(handleWordSubmit)

  return (
    <AppShell padding="xs">
      <Container size="xs">
        <Stack align="center">
          <GameBoard gameBoard={gameBoard} />
          <Keyboard onClick={handleKeyClick} />
          <SubmitButton input={input} onSubmit={handleWordSubmit} />
        </Stack>
      </Container>
    </AppShell>
  )
}

export default App
