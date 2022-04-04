import { func } from "prop-types"
import {
    ArrowForward as ArrowForwardIcon
} from "tabler-icons-react"
import Key from "./Key"

const KeyEnter = ({ onClick }) => {
  //   const isAWord = IS_A_WORD(input)
  //   const is5Letter = input.length === 5

  return (
    <Key
      onClick={onClick}
      code="enter"
      //   color={isAWord ? "blue" : "red"}
      //   disabled={!is5Letter}
    >
      <ArrowForwardIcon />
    </Key>
  )
}

KeyEnter.propTypes = {
  onClick: func.isRequired,
}
export default KeyEnter
