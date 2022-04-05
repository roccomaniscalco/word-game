import { Global, MantineProvider } from "@mantine/core"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"

const root = createRoot(document.getElementById("root"))

root.render(
  <StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      <Global
        styles={(theme) => ({
          body: {
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white,
          },
        })}
      />
      <App />
    </MantineProvider>
  </StrictMode>
)
