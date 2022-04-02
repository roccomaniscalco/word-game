import { Button, createStyles, Title } from "@mantine/core"
import { string } from "prop-types"

const useStyles = createStyles((theme) => ({
  letterContainer: {
    backgroundColor: theme.colors.dark[5],
    borderRadius: theme.radius.sm,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    
    textTransform: "capitalize",
    
    "&:hover" : {
      backgroundColor: theme.colors.dark[4],
    }
  },
}))

const Letter = ({ children }) => {
  const { classes } = useStyles()

  return (
    <Button className={classes.letterContainer}>
      <Title order={3}>{children}</Title>
    </Button>
  )
}

Letter.propTypes = {
    children: string,
}

export default Letter
