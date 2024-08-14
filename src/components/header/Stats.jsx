import { Grid, Text, useMantineTheme } from "@mantine/core"
import {
  ChartBar as ChartBarIcon,
  DeviceGamepad as DeviceGamepadIcon,
  Flame as FlameIcon,
  Percentage as PercentageIcon,
} from "tabler-icons-react"
import { useStats } from "../../contexts/StatsContext"
import AppModal from "../common/AppModal"
import AppPaper from "../common/AppPaper"
import StatsBox from "./StatsBox"
import StatsGuessDistribution from "./StatsGuessDistribution"

const Stats = () => {
  const theme = useMantineTheme()
  const { stats } = useStats()

  return (
    <AppModal title="Statistics" Icon={ChartBarIcon}>
      <Grid>
        <StatsBox
          title="Best Streak"
          figure={stats.highestStreak}
          icon={<FlameIcon color={theme.colors.red[6]} size={28} />}
        />
        <StatsBox
          title="Current Streak"
          figure={stats.currentStreak}
          icon={<FlameIcon color={theme.colors.red[6]} size={28} />}
        />
        <StatsBox
          title="Percentage Won"
          figure={
            Math.round(
              (stats.roundsWon / (stats.roundsWon + stats.roundsLost)) * 100
            ) || 0
          }
          icon={<PercentageIcon color={theme.colors.violet[6]} size={28} />}
        />
        <StatsBox
          title="Games Played"
          figure={stats.roundsWon + stats.roundsLost}
          icon={<DeviceGamepadIcon color={theme.colors.yellow[6]} size={28} />}
        />
        <Grid.Col>
          <AppPaper>
            <Text size="sm" align="center" pb="xs">
              Guess Distribution
            </Text>
            <StatsGuessDistribution />
          </AppPaper>
        </Grid.Col>
      </Grid>
    </AppModal>
  )
}

export default Stats
