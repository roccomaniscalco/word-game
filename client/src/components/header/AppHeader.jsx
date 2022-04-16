import { ActionIcon, createStyles, Group, Header, Title } from "@mantine/core"
import { ChartBar as ChartBarIcon } from "tabler-icons-react"
import Settings from "./Settings"

const useStyles = createStyles((theme) => ({
  header: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    height: 50,
    paddingInline: theme.spacing.md,
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

        <Settings />
      </Group>
    </Header>
  )
}

export default AppHeader
