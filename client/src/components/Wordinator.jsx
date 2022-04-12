import { Box, Center, Container, Stack } from "@mantine/core"
import React from "react"
import useWordinator from "../hooks/useWordinator"
import GameBoard from "./GameBoard"
import Keyboard from "./Keyboard"

const Wordinator = () => {
  const { gameBoard, currentRow, keys, handleKeyClick } = useWordinator()

  return (
    <Container size="xs" style={{ height: "100%" }}>
      <Stack align="center" justify="space-between" style={{ height: "100%" }}>
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

export default Wordinator
