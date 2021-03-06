import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import App from "./App"
import { StatsProvider } from "./contexts/StatsContext"
import ThemeProvider from "./styles/ThemeProvider"

const root = createRoot(document.getElementById("root"))

root.render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <StatsProvider>
          <App />
        </StatsProvider>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
)
