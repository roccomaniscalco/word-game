import { Group, Header, Title } from "@mantine/core"

const AppHeader = () => {
  return (
    <Header
      height={60}
      p="sm"
      sx={(theme) => ({ backgroundColor: theme.colors.dark[9] })}
    >
      <Group align="center" style={{ height: "100%" }}>
        <Title order={3}>Wordinator</Title>
      </Group>
    </Header>
  )
}

export default AppHeader
