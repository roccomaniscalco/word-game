import { AppShell, Container, Stack } from "@mantine/core"
import GameBoard from "./components/GameBoard"
import Keyboard from "./components/Keyboard"
import useGameBoard from "./hooks/useGameBoard"

function App() {
  const { gameBoard, currentRow, handleKeyClick } = useGameBoard()

  return (
    <AppShell
      padding="xs"
      styles={{
        root: { height: "100vh" },
        body: { height: "100%" },
      }}
    >
      <Container size="xs" style={{ height: "100%" }}>
        <Stack align="center" justify="center" style={{ height: "100%" }}>
          <GameBoard gameBoard={gameBoard} />
          <Keyboard currentRow={currentRow} onClick={handleKeyClick} />
        </Stack>
      </Container>
    </AppShell>
  )
}

export default App
