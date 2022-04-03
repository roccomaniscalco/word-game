import { Button } from "@mantine/core"
import { func } from "prop-types"
import { arrayOf, string } from "prop-types"
import React from "react"
import { WORDS } from "../constants/words"

const SubmitButton = ({ input, onSubmit }) => {
  const isAWord = WORDS.includes(input.join(""))
  const is5Letter = input.length === 5

  return (
    <Button
      size="sm"
      radius="xl"
      // validate input is a word before submitting
      onClick={() => {
        isAWord && onSubmit(input)
      }}
      disabled={!is5Letter}
      color={isAWord ? "blue" : "red"}
    >
      {isAWord || !is5Letter ? "Submit" : "Not a word"}
    </Button>
  )
}

SubmitButton.propTypes = {
  input: arrayOf(string).isRequired,
  onSubmit: func.isRequired,
}

export default SubmitButton
