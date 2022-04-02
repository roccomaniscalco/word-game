import { AppShell, Title } from "@mantine/core"
import Letter from "./components/Letter"

function App() {
  return (
    <AppShell>
      <Title order={1}>wordinator</Title>
      <Letter char="a"/>
    </AppShell>
  )
}

export default App
