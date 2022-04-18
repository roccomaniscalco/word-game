import { SimpleGrid } from "@mantine/core"
import { gameBoardRow } from "../../constants/propTypes"
import AppPaper from "../common/AppPaper"
import GameTile from "../GameTile"

const InstructionsGameRow = ({ row }) => {
  return (
    <AppPaper
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
      })}
    >
      <SimpleGrid cols={5} spacing={6}>
        {row.map((tile, i) => (
          <GameTile
            letter={tile.letter}
            evaluation={tile.evaluation}
            key={i}
            colI={0}
          />
        ))}
      </SimpleGrid>
    </AppPaper>
  )
}

InstructionsGameRow.propTypes = {
  row: gameBoardRow.isRequired,
}

export default InstructionsGameRow
