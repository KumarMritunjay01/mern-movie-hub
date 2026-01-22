
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import AddMovie from "./pages/Admin/AddMovie";
import EditMovie from "./pages/Admin/EditMovie";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/Login";
import Navbar from "./components/common/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        {/* Admin */}
        <Route path="/admin/add" element={
            <ProtectedRoute adminOnly={true}>
              <AddMovie />
            </ProtectedRoute>
          } />
        <Route
          path="/admin/edit/:id"
          element={
            <ProtectedRoute adminOnly={true}>
              <EditMovie />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App
