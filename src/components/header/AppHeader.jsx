import { createStyles, Group, Header, Title } from "@mantine/core"
import ThemeToggle from "./ThemeToggle"
import Stats from "./Stats"
import Instructions from "./Instructions"

const useStyles = createStyles((theme) => ({
  header: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingInline: theme.spacing.md,
  },
}))

const AppHeader = () => {
  const { classes } = useStyles()

  return (
    <Header height={50} className={classes.header}>
      <Title order={3}>Wordinator</Title>
      <Group spacing="xs">
        <Stats />
        <Instructions />
        <ThemeToggle />
      </Group>
    </Header>
  )
}

export default AppHeader
