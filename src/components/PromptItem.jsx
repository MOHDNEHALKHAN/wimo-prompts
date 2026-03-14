function PromptItem({ text }) {

  const copyPrompt = () => {
    navigator.clipboard.writeText(text)
  }

  return (
    <li className="flex justify-between items-center border p-3 mb-2 rounded">

      <span>• {text}</span>

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