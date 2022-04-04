import { arrayOf, exact, oneOf, string } from "prop-types"

export const letterEvaluation = oneOf([
  "undetermined",
  "unused",
  "used",
  "correct",
])

export const gameBoardRow = arrayOf(
  exact({
    letter: string.isRequired,
    evaluation: letterEvaluation.isRequired,
  })
)

export const gameBoard = arrayOf(gameBoardRow)
