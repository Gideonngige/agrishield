import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import TreeAnalysis from "./Pages/TreeAnalysis";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/tree-analysis" element={<TreeAnalysis />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;