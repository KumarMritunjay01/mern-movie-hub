
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import AddMovie from "./pages/Admin/AddMovie";
import EditMovie from "./pages/Admin/EditMovie";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />

        {/* Admin */}
        <Route path="/admin/add" element={<AddMovie />} />
        <Route path="/admin/edit/:id" element={<EditMovie />} />
      </Routes>
    </Router>
  );
}

export default App
