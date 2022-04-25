import { Center, Container, Stack } from "@mantine/core"
import useGameLogic from "../hooks/useGameLogic"
import { status } from "../hooks/useRound"
import GameBoard from "./GameBoard"
import Keyboard from "./Keyboard"
import NewRoundButton from "./NewRoundButton"

const Game = () => {
  const {
    gameBoard,
    currentRow,
    keys,
    correctWord,
    roundStatus,
    handleKeyClick,
    resetWordinator,
  } = useGameLogic()

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
        <div>
          <Keyboard
            keys={keys}
            currentRow={currentRow}
            onClick={handleKeyClick}
          />
        </div>
      </Stack>
    </Container>
  )
}

export default Game
