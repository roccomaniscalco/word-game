import { AppShell, Box, Center, Container, Stack } from "@mantine/core"
import GameBoard from "./components/GameBoard"
import Keyboard from "./components/Keyboard"
import useGameBoard from "./hooks/useGameBoard"
import useKeys from "./hooks/useKeys"

function App() {
  const { keys, updateKeys } = useKeys()
  const { gameBoard, currentRow, handleKeyClick } = useGameBoard(updateKeys)

  return (
    <AppShell
      padding="xs"
      styles={{
        root: { height: "100vh" },
        body: { height: "100%" },
        overflow: "hidden",
      }}
    >
      <Container size="xs" style={{ height: "100%" }}>
        <Stack
          align="center"
          justify="space-between"
          style={{ height: "100%" }}
        >
          <Center style={{ flex: 1, width: "100%" }}>
            <GameBoard gameBoard={gameBoard} />
          </Center>
          <Box style={{ width: "100%" }}>
            <Keyboard
              keys={keys}
              currentRow={currentRow}
              onClick={handleKeyClick}
            />
          </Box>
        </Stack>
      </Container>
    </AppShell>
  )
}

export default App
