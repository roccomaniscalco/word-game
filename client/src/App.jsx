import { AppShell } from "@mantine/core"
import { useState } from "react"
import AppHeader from "./components/header/AppHeader"
import Wordinator from "./components/Wordinator"

function App() {
  const [key, setKey] = useState()

  // change key to rerender Wordinator
  const rerenderWordinator = () => {
    setKey((prevKey) => !prevKey)
  }

  return (
    <AppShell
      padding="md"
      header={<AppHeader />}
      styles={{
        body: { height: "calc(100vh - 50px)" }, // offset body by Header height
      }}
    >
      <Wordinator rerenderWordinator={rerenderWordinator} key={key} />
    </AppShell>
  )
}

export default App
