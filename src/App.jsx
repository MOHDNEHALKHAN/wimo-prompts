import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import PromptPage from "./pages/Promptpage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prompts/:type" element={<PromptPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App