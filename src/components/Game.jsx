import { Center, Container, Stack } from "@mantine/core"
import { status } from "../constants/enums"
import useGameLogic from "../hooks/useGameLogic"
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

        <Keyboard
          keys={keys}
          currentRow={currentRow}
          onClick={handleKeyClick}
        />
      </Stack>
    </Container>
  )
}

export default Game
