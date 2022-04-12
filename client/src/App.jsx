import { AppShell, Box, Center, Container, Stack } from "@mantine/core"
import GameBoard from "./components/GameBoard"
import Keyboard from "./components/Keyboard"
import useGameBoard from "./hooks/useGameBoard"
import useKeyboard from "./hooks/useKeyboard"
import useKeys from "./hooks/useKeys"
import useRound from "./hooks/useRound"

function App() {
  const { isRoundOver, evaluateRow, updateRound } = useRound()
  const { keys, updateKeys } = useKeys()
  const { gameBoard, currentRow, addTile, removeTile, submitRow } =
    useGameBoard(isRoundOver, evaluateRow, updateRound, updateKeys)
  const { handleKeyClick } = useKeyboard(addTile, removeTile, submitRow)

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
