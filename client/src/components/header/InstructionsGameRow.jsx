import { Paper, SimpleGrid } from "@mantine/core"
import { gameBoardRow } from "../../constants/propTypes"
import GameTile from "../GameTile"

const InstructionsGameRow = ({ row }) => {
  return (
    <Paper
      p="sm"
      sx={(theme) => ({
        maxWidth: 300,
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
      })}
    >
      <SimpleGrid cols={5} spacing={5} py={2} style={{ aspectRatio: "5/1" }}>
        {row.map((tile, i) => (
          <GameTile
            letter={tile.letter}
            evaluation={tile.evaluation}
            key={i}
            colI={0}
          />
        ))}
      </SimpleGrid>
    </Paper>
  )
}

InstructionsGameRow.propTypes = {
  row: gameBoardRow.isRequired,
}

export default InstructionsGameRow
