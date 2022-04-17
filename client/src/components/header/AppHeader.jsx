import { createStyles, Group, Header, Title } from "@mantine/core"
import Settings from "./Settings"
import Statistics from "./Statistics"

const useStyles = createStyles((theme) => ({
  header: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white,

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
        <Statistics />
        <Settings />
      </Group>
    </Header>
  )
}

export default AppHeader
