import { Box, Group, Text, ThemeIcon } from "@mantine/core"
import {
  AlertTriangle as AlertTriangleIcon,
  ExternalLink as ExternalLinkIcon,
} from "tabler-icons-react"
import AppPaper from "../common/AppPaper"

const InstructionsExplicitWarning = () => {
  return (
    <AppPaper>
      <Group>
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
            style={{ display: "flex", alignItems: "center", gap: 6 }}
          >
            View word list <ExternalLinkIcon size={16} />
          </Text>
        </Box>
      </Group>
    </AppPaper>
  )
}

export default InstructionsExplicitWarning
