import { createStyles, Group, Header, Title } from "@mantine/core"
import ThemeToggle from "./ThemeToggle"
import Statistics from "./Statistics"
import Instructions from "./Instructions"

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
      <Title order={3}>Word+</Title>
      <Group spacing="xs">
        <Statistics />
        <Instructions />
        <ThemeToggle />
      </Group>
    </Header>
  )
}

export default AppHeader
