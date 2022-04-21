import { useMantineTheme } from "@mantine/core"

const useEvalColor = () => {
  const theme = useMantineTheme()

  return {
    TBD:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.white,

    UNUSED:
      theme.colorScheme === "dark"
        ? theme.colors.gray[7]
        : theme.colors.dark[0],

    USED:
      theme.colorScheme === "dark"
        ? theme.fn.darken(theme.colors.yellow[6], 0.3)
        : theme.colors.yellow[6],

    CORRECT:
      theme.colorScheme === "dark"
        ? theme.fn.darken(theme.colors.green[6], 0.3)
        : theme.colors.green[6],
  }
}

export default useEvalColor
