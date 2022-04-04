import { arrayOf, func, string } from "prop-types"
import {
  AlertCircle as AlertCircleIcon,
  ArrowForward as ArrowForwardIcon,
} from "tabler-icons-react"
import { IS_WORD } from "../constants/words"
import Key from "./Key"

const KeyEnter = ({ onClick, currentWord }) => {
  const isAWord = IS_WORD(currentWord)
  const is5Letter = currentWord.length === 5

  return (
    <Key
      onClick={onClick}
      code="enter"
      color={isAWord ? "blue" : "red"}
      disabled={!is5Letter}
    >
      {isAWord || !is5Letter ? <ArrowForwardIcon /> : <AlertCircleIcon />}
    </Key>
  )
}

KeyEnter.propTypes = {
  onClick: func.isRequired,
  currentWord: arrayOf(string).isRequired,
}
export default KeyEnter
