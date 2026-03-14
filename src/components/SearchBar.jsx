function SearchBar({ search, setSearch }) {

  return (
    <input
      type="text"
      placeholder="Search prompts..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-2 w-full mb-5 rounded"
    />
  )

}

export default SearchBar