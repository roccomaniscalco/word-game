import { arrayOf, exact, oneOf, string } from "prop-types"
import { status } from "../hooks/useRound"
import { evals } from "./qwerty"

export const roundStatus = oneOf(Object.values(status))

export const letterEvaluation = oneOf(Object.values(evals))

export const keys = arrayOf(
  exact({
    letter: string.isRequired,
    evaluation: letterEvaluation.isRequired,
  })
)

export const gameBoardRow = arrayOf(
  exact({
    letter: string.isRequired,
    evaluation: letterEvaluation.isRequired,
  })
)

export const gameBoard = arrayOf(gameBoardRow)
