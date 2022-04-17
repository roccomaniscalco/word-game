import {
  ActionIcon,
  Card,
  createStyles,
  Grid,
  Group,
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
          <Grid.Col>
            <Card className={classes.card} py="sm">
              <Group position="apart">
                <Text>Highest Streak</Text>
                <Group spacing={5}>
                  <FlameIcon color={theme.colors.red[6]} />
                  <Title order={2}>{stats.highestStreak}</Title>
                </Group>
              </Group>
            </Card>
          </Grid.Col>

          <Grid.Col span={4}>
            <Card className={classes.card} px="xs">
              <Stack align="center" spacing={5}>
                <Group spacing={5}>
                  <FlameIcon color={theme.colors.red[6]} />
                  <Title order={3}>{stats.currentStreak}</Title>
                </Group>
                <Text size="xs" align="center">
                  Current Streak
                </Text>
              </Stack>
            </Card>
          </Grid.Col>

          <Grid.Col span={4}>
            <Card className={classes.card} px="xs">
              <Stack align="center" spacing={5}>
                <Group spacing={5}>
                  <Title order={3}>
                    {Math.round(
                      (stats.roundsWon / (stats.roundsWon + stats.roundsLost)) *
                        100
                    )}
                  </Title>
                  <PercentageIcon color={theme.colors.violet[6]} />
                </Group>
                <Text size="xs" align="center">
                  Win Percentage
                </Text>
              </Stack>
            </Card>
          </Grid.Col>

          <Grid.Col span={4}>
            <Card className={classes.card} px="xs">
              <Stack align="center" spacing={5}>
                <Group spacing={5}>
                  <DeviceGamepadIcon color={theme.colors.blue[6]} />
                  <Title order={3}>{stats.roundsWon + stats.roundsLost}</Title>
                </Group>
                <Text size="xs" align="center">
                  Games Played
                </Text>
              </Stack>
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
