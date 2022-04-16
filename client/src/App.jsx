import { AppShell } from "@mantine/core"
import AppHeader from "./components/header/AppHeader"
import Wordinator from "./components/Wordinator"

function App() {
  return (
    <AppShell
      padding="md"
      header={<AppHeader />}
      styles={{
        body: { height: "calc(100vh - 50px)" }, // offset body by Header height
      }}
    >
      <Wordinator />
    </AppShell>
  )
}

export default App
