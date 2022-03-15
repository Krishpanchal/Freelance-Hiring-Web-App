import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import Login from "./screens/auth/Login/Login";
import Signup from "./screens/auth/Signup/Signup";
import HomePage from "./screens/HomePage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <ProtectedRoute path="/profile" element={<Profile />} />
      </Routes>
    </Layout>
  );
}

export default App;
