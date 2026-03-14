import { useParams } from "react-router"
import { useState } from "react"
import { prompts } from "../data/prompts"
import SearchBar from "../components/SearchBar"
import PromptList from "../components/PromptList"

function PromptPage() {

  const { type } = useParams()
  const [search, setSearch] = useState("")

  const promptList = prompts[type] || []

  const filtered = promptList.filter((p) =>
    p.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-10 max-w-xl mx-auto">

      <h2 className="text-2xl font-bold mb-4 capitalize">
        {type} Prompts
      </h2>

      <SearchBar search={search} setSearch={setSearch} />

      <PromptList prompts={filtered} />

    </div>
  )
}

export default PromptPage