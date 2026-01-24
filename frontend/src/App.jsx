import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/User/Search";
import AddMovie from "./pages/Admin/AddMovie";
import EditMovie from "./pages/Admin/EditMovie";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/User/Profile";
import Navbar from "./components/common/Navbar";
import { useAuth } from "./context/AuthContext";
import UserHome from "./pages/User/UserHome";
import NotFound from "./pages/NotFound";
import AdminHome from "./pages/Admin/AdminHome";

function App() {
  const { user } = useAuth();

  return (
    <>
      {/* Show Navbar only when logged in */}
      {user && <Navbar />}

      <Routes>

        <Route path="*" element={<NotFound />} />
        {/* ROOT ROUTE LOGIC */}
        <Route
          path="/"
          element={
            user ? <Navigate to="/user" /> : <Home />
          }
        />

        {/* AUTH ROUTES */}
        <Route path="/user/login" element={<Login />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* USER ROUTES */}
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <UserHome />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/search"
          element={
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>
          }
        />

        {/* ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminHome />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add"
          element={
            <ProtectedRoute adminOnly={true}>
              <AddMovie />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/admin/edit/:id"
          element={
            <ProtectedRoute adminOnly={true}>
              <EditMovie />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

export default App;