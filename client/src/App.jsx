import { AppShell, Container, Stack } from "@mantine/core"
import GameBoard from "./components/GameBoard"
import Keyboard from "./components/Keyboard"
import useGameBoard from "./hooks/useGameBoard"

function App() {
  const { gameBoard, currentWord, handleKeyClick } = useGameBoard()

  return (
    <AppShell padding="xs">
      <Container size="xs">
        <Stack align="center">
          <GameBoard gameBoard={gameBoard} />
          <Keyboard currentWord={currentWord} onClick={handleKeyClick} />
        </Stack>
      </Container>
    </AppShell>
  )
}

export default App
