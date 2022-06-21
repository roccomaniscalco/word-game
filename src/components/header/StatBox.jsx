import { Center, Grid, Stack, Text, Title } from "@mantine/core"
import { string, number, node } from "prop-types"
import AppPaper from "../common/AppPaper"

const StatBox = ({ title, figure, icon }) => {
  return (
    <Grid.Col span={6}>
      <AppPaper>
        <Stack align="center" spacing={5}>
          <Center>
            {icon}
            <Title order={2} ml={5}>
              {figure}
            </Title>
          </Center>
          <Text size="sm" align="center">
            {title}
          </Text>
        </Stack>
      </AppPaper>
    </Grid.Col>
  )
}

StatBox.propTypes = {
  title: string.isRequired,
  figure: number.isRequired,
  icon: node.isRequired,
}

export default StatBox
