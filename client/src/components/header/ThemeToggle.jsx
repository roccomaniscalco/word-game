import { ActionIcon, useMantineColorScheme } from "@mantine/core"
import { Sun as SunIcon, Moon as MoonIcon } from "tabler-icons-react"
import { useRef } from "react"

const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const actionIconRef = useRef()

  const handleClick = () => {
    toggleColorScheme()
    actionIconRef.current.blur() // prevent ActionIcon from focusing when clicked
  }
  
  return (
    <ActionIcon
      onClick={handleClick}
      size="lg"
      radius="md"
      variant="default"
      sx={(theme) => ({
        color:
          theme.colorScheme === "dark"
            ? theme.colors.yellow[4]
            : theme.colors.blue[6],
      })}
      ref={actionIconRef}
      aria-label={colorScheme === "dark" ? "Enable Light Mode" : "Enable Dark Mode"}
    >
      {colorScheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </ActionIcon>
  )
}

export default ThemeToggle
