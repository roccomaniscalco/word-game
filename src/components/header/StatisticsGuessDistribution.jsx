import {
  Group,
  Progress,
  Stack,
  Text,
  useMantineTheme
} from "@mantine/core"
import { useStats } from "../../contexts/StatsContext"

const StatisticsGuessDistribution = () => {
  const theme = useMantineTheme()
  const { stats } = useStats()

  return (
    <Stack spacing="xs">
      {Object.entries(stats.guessDistribution).map(([guess, count]) => (
        <Group key={guess}>
          <Text style={{ width: 6 }} size="sm" weight={700} align="center">
            {guess}
          </Text>
          <Progress
            value={Math.round((count / stats.roundsWon) * 100)}
            label={count}
            size="xl"
            radius="xl"
            sx={{
              flex: 1,
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[4]
                  : theme.colors.gray[4],
            }}
          />
        </Group>
      ))}
    </Stack>
  )
}

export default StatisticsGuessDistribution
