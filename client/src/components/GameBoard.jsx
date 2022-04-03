import { Card, SimpleGrid } from "@mantine/core"
import { arrayOf, string } from "prop-types"

const GameBoard = ({ gameBoard }) => {
  return (
    <SimpleGrid cols={5} spacing="xs" sx={{ height: "480px", width: "400px" }}>
      {gameBoard.map((row) =>
        row.map((letter, i) => (
          <Card sx={{ background: "none" }} withBorder key={i}>
            {letter}
          </Card>
        ))
      )}
    </SimpleGrid>
  )
}

GameBoard.propTypes = {
  gameBoard: arrayOf(arrayOf(string)),
}

export default GameBoard