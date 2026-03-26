function PromptItem({ text }) {

  const copyPrompt = () => {
    navigator.clipboard.writeText(text)
  }

  return (
    <li className="flex justify-between items-center ">

      <span> {text}</span>

      <button
        onClick={copyPrompt}
        className="text-blue-600 font-bold"
      >
        📋
      </button>

    </li>
  )

}

export default PromptItem