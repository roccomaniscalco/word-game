import { func } from "prop-types"
import {
  AlertCircle as AlertCircleIcon,
  ArrowForward as ArrowForwardIcon,
} from "tabler-icons-react"
import { IS_WORD } from "../constants/words"
import { gameBoardRow } from "../constants/propTypes"
import Key from "./Key"

const KeyEnter = ({ onClick, currentRow }) => {
  const isAWord = IS_WORD(currentRow)
  const is5Letter = currentRow.length === 5

  return (
    <Key
      onClick={onClick}
      code="enter"
      disabled={!is5Letter}
      sx={(theme) => ({
        backgroundColor: isAWord ? theme.colors.blue : theme.colors.red,
        "&:hover": {
          backgroundColor: isAWord ? theme.colors.blue : theme.colors.red,
        },
        transition: "none"
      })}
    >
      {isAWord || !is5Letter ? <ArrowForwardIcon /> : <AlertCircleIcon />}
    </Key>
  )
}

KeyEnter.propTypes = {
  onClick: func.isRequired,
  currentRow: gameBoardRow.isRequired,
}
export default KeyEnter
