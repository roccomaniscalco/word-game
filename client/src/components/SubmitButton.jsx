import { Button } from "@mantine/core"
import { func } from "prop-types"
import { arrayOf, string } from "prop-types"
import React from "react"
import WORDS from "../constants/words"

const SubmitButton = ({ input, onClick }) => {
  const isAWord = WORDS.includes(input.join(""))
  const is5Letter = input.length === 5

  return (
    <Button
      size="sm"
      radius="xl"
      onClick={onClick}
      disabled={!is5Letter}
      color={isAWord ? "blue" : "red"}
    >
      {isAWord || !is5Letter ? "Submit" : "Not a word"}
    </Button>
  )
}

SubmitButton.propTypes = {
  input: arrayOf(string).isRequired,
  onClick: func.isRequired,
}

export default SubmitButton
