import { Box, Divider, Group, Progress, Stack, Text } from "@mantine/core"
import React from "react"
import { useStats } from "../../contexts/StatsContext"

const StatisticsGuessDistribution = () => {
  const { stats } = useStats()

  const gamesPlayed = Object.values(stats.guessDistribution).reduce(
    (sum, guessCount) => sum + guessCount,
    0
  )

  return (
    <>
      <Text size="xs" align="center" pb="xs">
        Guess Distribution
      </Text>
      <Divider mb="sm" size="sm" variant="dashed"/>
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
                sx={{ backgroundColor: "transparent" }}
              />
            </Box>
          </Group>
        ))}
      </Stack>
      <Divider mt="sm" size="sm" variant="dashed"/>
    </>
  )
}

export default StatisticsGuessDistribution
