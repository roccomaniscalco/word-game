import { Box, Center, Container, Stack } from "@mantine/core"
import { func } from "prop-types"
import React from "react"
import { status } from "../hooks/useRound"
import useWordinator from "../hooks/useWordinator"
import GameBoard from "./GameBoard"
import Keyboard from "./Keyboard"
import NewRoundButton from "./NewRoundButton"

const Wordinator = ({ startNewRound }) => {
  const {
    gameBoard,
    currentRow,
    keys,
    correctWord,
    roundStatus,
    handleKeyClick,
  } = useWordinator()

  return (
    <Container size="xs" style={{ height: "100%" }}>
      <Stack align="center" justify="space-between" style={{ height: "100%" }}>
        {roundStatus !== status.TBD && (
          <NewRoundButton
            roundStatus={roundStatus}
            correctWord={correctWord}
            onClick={startNewRound}
          />
        )}
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
  )
}

Wordinator.propTypes = {
  startNewRound: func.isRequired,
}

export default Wordinator
