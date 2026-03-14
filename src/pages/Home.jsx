import { useState } from "react"
import { prompts } from "../data/prompts"

function Home() {

  const [category, setCategory] = useState("pre")
  const [search, setSearch] = useState("")

  const filteredPrompts = prompts[category].filter((p) =>
    p.toLowerCase().includes(search.toLowerCase())
  )

  const copyPrompt = (text) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="p-10  w-full max-w-3xl mx-auto bg-gray-100">

      <h1 className="text-3xl font-bold mb-6 text-center">
        WIMO Prompts
      </h1>

      {/* Buttons */}

      <div className="grid grid-cols-2 gap-3 mb-6">

        <button
          onClick={() => setCategory("pre")}
          className="bg-yellow-300 text-black p-2 rounded"
        >
          Pre Pickup
        </button>

        <button
          onClick={() => setCategory("post")}
          className="bg-blue-300 text-black p-2 rounded"
        >
          Post Pickup
        </button>

        <button
          onClick={() => setCategory("cancellation")}
          className="bg-emerald-300 text-black p-2 rounded"
        >
          Cancellation
        </button>

        <button
          onClick={() => setCategory("pnnotes")}
          className="bg-orange-300 text-black p-2 rounded"
        >
          PN Notes
        </button>

      </div>

      {/* Search */}

      <input
        type="text"
        placeholder="Search prompts..."
        className="border p-2 w-full mb-4 rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Prompts */}

      <ul>

        {filteredPrompts.map((prompt, index) => (
          <li
            key={index}
            className="flex justify-between border p-3 mb-2 rounded"
          >
            <span>{prompt}</span>

            <button onClick={() => copyPrompt(prompt)}>
              📋
            </button>
          </li>
        ))}

      </ul>

    </div>
  )
}

export default Home