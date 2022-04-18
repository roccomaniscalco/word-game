import {
  ActionIcon,
  Card,
  Center,
  createStyles,
  Grid,
  Modal,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core"
import { useState } from "react"
import {
  ChartBar as ChartBarIcon,
  DeviceGamepad as DeviceGamepadIcon,
  Flame as FlameIcon,
  Percentage as PercentageIcon,
} from "tabler-icons-react"
import { useStats } from "../../contexts/StatsContext"
import StatisticsGuessDistribution from "./StatisticsGuessDistribution"

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[2],
  },
}))

const Statistics = () => {
  const theme = useMantineTheme()
  const { classes } = useStyles()
  const { stats } = useStats()
  const [isOpened, setIsOpened] = useState(false)

  const handleClose = () => setIsOpened(false)
  const handleOpen = () => setIsOpened(true)

  return (
    <>
      <Modal opened={isOpened} onClose={handleClose} title="Statistics">
        <Grid>
          <Grid.Col span={6}>
            <Card className={classes.card}>
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
            </Card>
          </Grid.Col>

          <Grid.Col span={6}>
            <Card className={classes.card}>
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
            </Card>
          </Grid.Col>

          <Grid.Col span={6}>
            <Card className={classes.card}>
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
            </Card>
          </Grid.Col>

          <Grid.Col span={6}>
            <Card className={classes.card}>
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
            </Card>
          </Grid.Col>

          <Grid.Col>
            <Card className={classes.card}>
              <Text size="sm" align="center" pb="xs">
                Guess Distribution
              </Text>
              <StatisticsGuessDistribution />
            </Card>
          </Grid.Col>
        </Grid>
      </Modal>

      <ActionIcon variant="default" size="lg" radius="md" onClick={handleOpen}>
        <ChartBarIcon size={22} />
      </ActionIcon>
    </>
  )
}

export default Statistics
