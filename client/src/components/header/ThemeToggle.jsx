import { ActionIcon, useMantineColorScheme } from "@mantine/core"
import { Sun as SunIcon, Moon as MoonIcon } from "tabler-icons-react"

const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <ActionIcon
      onClick={toggleColorScheme}
      size="lg"
      radius="md"
      variant="default"
      sx={(theme) => ({
        color:
          theme.colorScheme === "dark"
            ? theme.colors.yellow[4]
            : theme.colors.blue[6],
      })}
    >
      {colorScheme === "dark" ? <SunIcon size={22} /> : <MoonIcon size={22} />}
    </ActionIcon>
  )
}

export default ThemeToggle
