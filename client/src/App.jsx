import { AppShell } from "@mantine/core"
import Wordinator from "./components/Wordinator"

function App() {
  return (
    <AppShell
      padding="xs"
      styles={{
        root: { height: "100vh" },
        body: { height: "100%" },
        overflow: "hidden",
      }}
    >
      <Wordinator />
    </AppShell>
  )
}

export default App
