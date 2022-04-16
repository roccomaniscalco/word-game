import { func } from "prop-types"
import {
  AlertCircle as AlertCircleIcon,
  ArrowForward as ArrowForwardIcon,
} from "tabler-icons-react"
import { gameBoardRow } from "../constants/propTypes"
import { IS_WORD } from "../constants/words"
import Key from "./Key"

const KeyEnter = ({ onClick, currentRow }) => {
  const isAWord = IS_WORD(currentRow)
  const is5Letter = currentRow.length === 5

  return (
    <Key
      onClick={onClick}
      code="enter"
      disabled={!is5Letter}
      Icon={isAWord || !is5Letter ? ArrowForwardIcon : AlertCircleIcon}
      sx={(theme) => ({
        color: theme.white,
        backgroundColor: isAWord ? theme.colors.blue : theme.colors.red,
        "&:hover": {
          backgroundColor: isAWord ? theme.colors.blue : theme.colors.red,
        },
        transition: "none",
      })}
    />
  )
}

KeyEnter.propTypes = {
  onClick: func.isRequired,
  currentRow: gameBoardRow.isRequired,
}
export default KeyEnter
