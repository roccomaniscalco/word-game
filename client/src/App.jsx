import { AppShell } from "@mantine/core"
import { useState } from "react"
import AppHeader from "./components/AppHeader"
import Wordinator from "./components/Wordinator"

function App() {
  const [key, setKey] = useState()

  // change key to rerender Wordinator
  const rerenderWordinator = () => {
    setKey((prevKey) => !prevKey)
  }

  return (
    <AppShell fixed padding="sm" header={<AppHeader />}>
      <Wordinator rerenderWordinator={rerenderWordinator} key={key} />
    </AppShell>
  )
}

export default App
