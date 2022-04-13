import { Box, Center, Container, Stack } from "@mantine/core"
import { func } from "prop-types"
import React from "react"
import useWordinator from "../hooks/useWordinator"
import GameBoard from "./GameBoard"
import Keyboard from "./Keyboard"
import NewRoundButton from "./NewRoundButton"

const Wordinator = ({ resetWordinator }) => {
  const { gameBoard, currentRow, keys, correctWord, status, handleKeyClick } =
    useWordinator()

  return (
    <Container size="xs" style={{ height: "100%" }}>
      <Stack align="center" justify="space-between" style={{ height: "100%" }}>
        <NewRoundButton
          status={status}
          correctWord={correctWord}
          onClick={resetWordinator}
        />
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
  resetWordinator: func.isRequired,
}

export default Wordinator
