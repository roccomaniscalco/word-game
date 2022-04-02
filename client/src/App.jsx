import { AppShell, Container, Title } from "@mantine/core"
import Keyboard from "./components/Keyboard"

function App() {
  return (
    <AppShell padding="xs">
      <Container size="sm">
        <Title order={1}>wordinator</Title>
        <Keyboard />
      </Container>
    </AppShell>
  )
}

export default App
