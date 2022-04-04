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
      <Container size="sm" style={{ height: "100%" }}>
        <Stack
          align="center"
          justify="space-between"
          style={{ height: "100%" }}
        >
          <Stack justify="center" style={{ flex: 1 }}>
            <GameBoard gameBoard={gameBoard} />
          </Stack>
          <Keyboard currentRow={currentRow} onClick={handleKeyClick} />
        </Stack>
      </Container>
    </AppShell>
  )
}

export default App
