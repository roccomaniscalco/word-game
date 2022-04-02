import { AppShell, Container, Stack, Text, Title } from "@mantine/core"
import Keyboard from "./components/Keyboard"
import SubmitButton from "./components/SubmitButton"
import useKeyboard from "./hooks/useKeyboard"

function App() {
  const { input, handleKeyClick } = useKeyboard()

  return (
    <AppShell padding="xs">
      <Container size="sm">
        <Title order={1}>wordinator</Title>
        <Stack align="center">
          <Text>{input}</Text>
          <Keyboard onClick={handleKeyClick} />
          <SubmitButton input={input}/>
        </Stack>
      </Container>
    </AppShell>
  )
}

export default App
