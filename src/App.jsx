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
            position: "fixed",
            minHeight: "100vh",
            // duplicate keys needed for fallback styles
            // eslint-disable-next-line
            minHeight: "-moz-available",
            // eslint-disable-next-line
            minHeight: "-webkit-fill-available",
            // eslint-disable-next-line
            minHeight: "fill-available",
          },
        }}
      >
        <Game />
      </AppShell>
    </>
  )
}

export default App
