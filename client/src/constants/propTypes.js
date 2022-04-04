import { arrayOf, exact, oneOf, string } from "prop-types"

export const tileEvaluation = oneOf([
  "undetermined",
  "unused",
  "used",
  "correct",
])

export const gameBoardRow = arrayOf(
  exact({
    letter: string.isRequired,
    evaluation: tileEvaluation.isRequired,
  })
)

export const gameBoard = arrayOf(gameBoardRow)
