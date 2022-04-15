import { ColorSchemeProvider, Global, MantineProvider } from "@mantine/core"
import { useLocalStorage } from "@mantine/hooks"
import { node } from "prop-types"

const ThemeProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  })
  const toggleColorScheme = () =>
    setColorScheme((prevValue) => (prevValue === "dark" ? "light" : "dark"))

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <Global
          styles={(theme) => ({
            body: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[9]
                  : theme.white,
            },
          })}
        />
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

ThemeProvider.propTypes = {
  children: node,
}

export default ThemeProvider
