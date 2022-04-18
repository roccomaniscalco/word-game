import {
  Box,
  Group,
  Progress,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core"
import React from "react"
import { useStats } from "../../contexts/StatsContext"

const StatisticsGuessDistribution = () => {
  const theme = useMantineTheme()
  const { stats } = useStats()

  const gamesPlayed = stats.roundsLost + stats.roundsWon

  return (
    <Stack spacing="xs">
      {Object.entries(stats.guessDistribution).map(([guess, count]) => (
        <Group key={guess} sx={{ flex: 1 }}>
          <Text style={{ width: 6 }} size="sm" weight={700} align="center">
            {guess}
          </Text>
          <Box sx={{ flex: 1 }}>
            <Progress
              value={Math.round((count / gamesPlayed) * 100)}
              label={count}
              size="xl"
              radius="xl"
              sx={{
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[4]
                    : theme.colors.gray[4],
              }}
            />
          </Box>
        </Group>
      ))}
    </Stack>
  )
}

export default StatisticsGuessDistribution
