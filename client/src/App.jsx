import { AppShell } from "@mantine/core"
import { useState } from "react"
import Wordinator from "./components/Wordinator"

function App() {
  const [key, setKey] = useState()
  
  // change key to rerender Wordinator
  const rerenderWordinator = () => {
    setKey((prevKey) => !prevKey)
  }

  return (
    <AppShell
      padding="xs"
      styles={{
        root: { height: "100vh" },
        body: { height: "100%" },
        overflow: "hidden",
      }}
    >
      <Wordinator rerenderWordinator={rerenderWordinator} key={key} />
    </AppShell>
  )
}

export default App
