import { SimpleGrid } from "@mantine/core"
import { gameBoardRow } from "../../constants/propTypes"
import GameTile from "../GameTile"

const InstructionsGameRow = ({ row }) => {
  return (
    <SimpleGrid
      cols={5}
      spacing={5}
      py={2}
      style={{ aspectRatio: "5/1", maxWidth: 300 }}
    >
      {row.map((tile, i) => (
        <GameTile
          letter={tile.letter}
          evaluation={tile.evaluation}
          key={i}
          colI={0}
        />
      ))}
    </SimpleGrid>
  )
}

InstructionsGameRow.propTypes = {
  row: gameBoardRow.isRequired,
}

export default InstructionsGameRow
