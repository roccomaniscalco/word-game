import { createStyles, Paper } from "@mantine/core"
import { node } from "prop-types"

const useStyles = createStyles((theme) => ({
  paper: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[2],
  },
}))

const AppPaper = ({ children, ...props }) => {
  const { classes } = useStyles()

  return (
    <Paper className={classes.paper} {...props} p="lg">
      {children}
    </Paper>
  )
}

AppPaper.propTypes = {
    children: node
}

export default AppPaper
