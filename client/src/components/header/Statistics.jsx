import {
  Center,
  Grid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core"
import {
  ChartBar as ChartBarIcon,
  DeviceGamepad as DeviceGamepadIcon,
  Flame as FlameIcon,
  Percentage as PercentageIcon,
} from "tabler-icons-react"
import { useStats } from "../../contexts/StatsContext"
import AppModal from "../common/AppModal"
import AppPaper from "../common/AppPaper"
import StatisticsGuessDistribution from "./StatisticsGuessDistribution"

const Statistics = () => {
  const theme = useMantineTheme()
  const { stats } = useStats()

  return (
    <AppModal title="Statistics" Icon={ChartBarIcon}>
      <Grid>
        <Grid.Col span={6}>
          <AppPaper>
            <Stack align="center" spacing={5}>
              <Center>
                <FlameIcon color={theme.colors.red[6]} size={28} />
                <Title order={2} ml={5}>
                  {stats.highestStreak}
                </Title>
              </Center>
              <Text size="sm" align="center">
                Best Streak
              </Text>
            </Stack>
          </AppPaper>
        </Grid.Col>

        <Grid.Col span={6}>
          <AppPaper>
            <Stack align="center" spacing={5}>
              <Center>
                <FlameIcon color={theme.colors.red[6]} size={28} />
                <Title order={2} ml={5}>
                  {stats.currentStreak}
                </Title>
              </Center>
              <Text size="sm" align="center">
                Current Streak
              </Text>
            </Stack>
          </AppPaper>
        </Grid.Col>

        <Grid.Col span={6}>
          <AppPaper>
            <Stack align="center" spacing={5}>
              <Center>
                <Title order={2} mr={5}>
                  {Math.round(
                    (stats.roundsWon / (stats.roundsWon + stats.roundsLost)) *
                      100
                  ) || 0}
                </Title>
                <PercentageIcon color={theme.colors.violet[6]} size={28} />
              </Center>
              <Text size="sm" align="center">
                Percentage Won
              </Text>
            </Stack>
          </AppPaper>
        </Grid.Col>

        <Grid.Col span={6}>
          <AppPaper>
            <Stack align="center" spacing={5}>
              <Center>
                <DeviceGamepadIcon color={theme.colors.yellow[6]} size={28} />
                <Title order={2} ml={5}>
                  {stats.roundsWon + stats.roundsLost}
                </Title>
              </Center>
              <Text size="sm" align="center">
                Games Played
              </Text>
            </Stack>
          </AppPaper>
        </Grid.Col>

        <Grid.Col>
          <AppPaper>
            <Text size="sm" align="center" pb="xs">
              Guess Distribution
            </Text>
            <StatisticsGuessDistribution />
          </AppPaper>
        </Grid.Col>
      </Grid>
    </AppModal>
  )
}

export default Statistics
