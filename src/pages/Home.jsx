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
    <div className="p-10  w-full max-w-4xl mx-auto bg-gray-100">

      <h1 className="text-3xl font-bold mb-6 text-center">
        WIMO Prompts
      </h1>
    <div className="bg-white p-4 rounded mb-6">
      <h2 className="text-lg font-bold mb-3">35% Calculator</h2>
      <input
        type="number"
        placeholder="Enter amount"
        className="border p-2 w-full mb-2 rounded"
        onChange={(e) => {
          const result = (parseFloat(e.target.value) * 0.35).toFixed(2)
          document.getElementById("result").textContent = result || "0"
        }}
      />
      <p className="text-sm"><span id="result" className="font-bold">0</span></p>
    </div>
      

      {/* Buttons */}

      <div className="gap-3 mb-6 flex space-x-2 items-end">

        <button
          onClick={() => setCategory("pre")}
          className={`bg-yellow-300 text-black p-2 rounded ${category === "pre" ? "border-b-4 border-black" : "border-b-4 border-transparent"}`}
        >
          Pre Pickup
        </button>

        <button
          onClick={() => setCategory("post")}
          className={`bg-blue-300 text-black p-2 rounded ${category === "post" ? "border-b-4 border-black" : "border-b-4 border-transparent"}`}
        >
          Post Pickup
        </button>

        <button
          onClick={() => setCategory("cancellation")}
          className={`bg-emerald-300 text-black p-2 rounded ${category === "cancellation" ? "border-b-4 border-black" : "border-b-4 border-transparent"}`}
        >
          Cancellation
        </button>

        <button
          onClick={() => setCategory("pnnotes")}
          className={`bg-orange-300 text-black p-2 rounded ${category === "pnnotes" ? "border-b-4 border-black" : "border-b-4 border-transparent"}`}
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

      {/* Prompts - scrollable area */}
      <div className="bg-white p-4 rounded">
        <div className="h-72 overflow-auto">
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
      </div>

    </div>
  )
}

export default Home