import { ActionIcon, Box, Center, Menu, SegmentedControl } from "@mantine/core"
import {
  Settings as SettingsIcon,
  Sun as SunIcon,
  Moon as MoonIcon,
} from "tabler-icons-react"

const Settings = () => {
  return (
    <Menu
      control={
        <ActionIcon variant="default" size="lg" radius="md">
          <SettingsIcon size={22} />
        </ActionIcon>
      }
    >
      <Menu.Label>Settings</Menu.Label>
      <Box>
        <SegmentedControl
          sx={{ margin: "sm" }}
          fullWidth
          data={[
            {
              label: (
                <Center>
                  <SunIcon size={16} />
                  <Box ml={10}>Light</Box>
                </Center>
              ),
              value: "light",
            },
            {
              label: (
                <Center>
                  <MoonIcon size={16} />
                  <Box ml={10}>Dark</Box>
                </Center>
              ),
              value: "dark",
            },
          ]}
        />
      </Box>
    </Menu>
  )
}

export default Settings
