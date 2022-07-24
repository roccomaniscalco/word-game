import { AppShell, useMantineTheme } from "@mantine/core"
import { Helmet } from "react-helmet-async"
import Game from "./components/Game"
import AppHeader from "./components/header/AppHeader"

function App() {
  const theme = useMantineTheme()
  return (
    <>
      <Helmet>
        {theme.colorScheme === "dark" ? (
          <meta name="theme-color" content={theme.colors.dark[9]} />
        ) : (
          <meta name="theme-color" content={theme.white} />
        )}
      </Helmet>
      <AppShell
        padding="md"
        fixed
        header={<AppHeader />}
        styles={{
          root: {
            height: "calc(100vh - env(safe-area-inset-bottom))",
          },
          main: {
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            overflow: "hidden",
          }
        }}
      >
        <Game />
      </AppShell>
    </>
  )
}

export default App
