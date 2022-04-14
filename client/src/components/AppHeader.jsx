import { ActionIcon, createStyles, Group, Header, Title } from "@mantine/core"
import {
  ChartBar as ChartBarIcon,
  Settings as SettingsIcon,
} from "tabler-icons-react"

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    height: 60,
    paddingInline: theme.spacing.md,

    backgroundColor: theme.colors.dark[9],
  },
}))

const AppHeader = () => {
  const { classes } = useStyles()
  
  return (
    <Header className={classes.header}>
      <Title order={3}>Wordinator</Title>
      <Group spacing="xs">
        <ActionIcon variant="default" size="lg" radius="md">
          <ChartBarIcon size={22} />
        </ActionIcon>
        <ActionIcon variant="default" size="lg" radius="md">
          <SettingsIcon size={22} />
        </ActionIcon>
      </Group>
    </Header>
  )
}

export default AppHeader
