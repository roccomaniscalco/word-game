import { Box, Group, Text, ThemeIcon } from "@mantine/core"
import { AlertTriangle as AlertTriangleIcon } from "tabler-icons-react"
import AppPaper from "../common/AppPaper"

const InstructionsExplicitWarning = () => {
  return (
    <AppPaper>
      <Group noWrap>
        <ThemeIcon size="xl" color="yellow" variant="light">
          <AlertTriangleIcon />
        </ThemeIcon>
        <Box>
          <Text size="sm" weight={700}>
            Word list contains explicit words
          </Text>
          <Text
            size="sm"
            variant="link"
            component="a"
            href="https://www-cs-faculty.stanford.edu/~knuth/sgb-words.txt"
            target="_blank"
            rel="noopener noreferrer"
          >
            View word list
          </Text>
        </Box>
      </Group>
    </AppPaper>
  )
}

export default InstructionsExplicitWarning
