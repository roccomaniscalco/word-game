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
        withNormalizeCSS
        theme={{ colorScheme }}
        styles={{
          Title: (theme) => ({
            root: {
              color: theme.colorScheme === "dark" ? theme.white : theme.black,
            },
          }),
        }}
      >
        <Global
          styles={(theme) => ({
            body: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[9]
                  : theme.white,
            },
            // override disabled Key styles
            ".key.mantine-Button-root:disabled": {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[2],
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[3]
                  : theme.colors.gray[5],
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
