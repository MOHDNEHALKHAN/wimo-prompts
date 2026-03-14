import PromptItem from "./PromptItem"

function PromptList({ prompts }) {

  return (
    <ul>

      {prompts.map((p, index) => (
        <PromptItem key={index} text={p} />
      ))}

    </ul>
  )

}

export default PromptList