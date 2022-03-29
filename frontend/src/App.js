import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import Login from "./screens/auth/Login/Login";
import Profile from "./screens/auth/Profile";
import Signup from "./screens/auth/Signup/Signup";
import HomePage from "./screens/HomePage";
import ShowJobHunters from "./screens/ShowJobHunters";
import ShowProjects from "./screens/ShowProjects";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/search/project' element={<ShowProjects />} />
        <Route path='/search/users' element={<ShowJobHunters />} />

        {/* Projected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
