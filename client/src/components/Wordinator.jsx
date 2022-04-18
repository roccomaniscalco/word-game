import { Box, Center, Container, Stack } from "@mantine/core"
import { status } from "../hooks/useRound"
import useWordinator from "../hooks/useWordinator"
import GameBoard from "./GameBoard"
import Keyboard from "./Keyboard"
import NewRoundButton from "./NewRoundButton"

const Wordinator = () => {
  const {
    gameBoard,
    currentRow,
    keys,
    correctWord,
    roundStatus,
    handleKeyClick,
    resetWordinator,
  } = useWordinator()

  return (
    <Container
      size="xs"
      style={{ height: "100%", position: "relative", padding: 0 }}
    >
      <Stack align="center" justify="space-between" style={{ height: "100%" }}>
        {roundStatus !== status.TBD && (
          <NewRoundButton
            roundStatus={roundStatus}
            correctWord={correctWord}
            onClick={resetWordinator}
          />
        )}
        <Center style={{ flex: 1, width: "100%" }}>
          <GameBoard gameBoard={gameBoard} />
        </Center>
        <Box>
          <Keyboard
            keys={keys}
            currentRow={currentRow}
            onClick={handleKeyClick}
          />
        </Box>
      </Stack>
    </Container>
  )
}

export default Wordinator
