import { arrayOf, func, string } from "prop-types"
import {
  AlertCircle as AlertCircleIcon,
  ArrowForward as ArrowForwardIcon,
} from "tabler-icons-react"
import { IS_A_WORD } from "../constants/words"
import Key from "./Key"

const KeyEnter = ({ input, onClick }) => {
  const isAWord = IS_A_WORD(input)
  const is5Letter = input.length === 5

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
  input: arrayOf(string).isRequired,
  onClick: func.isRequired,
}
export default KeyEnter
