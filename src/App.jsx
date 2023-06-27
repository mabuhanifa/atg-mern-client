import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Reset from "./components/Reset";
import Signup from "./components/Signup";

export default function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<Signup />} path="/signup" />
      <Route element={<Profile />} path="/profile" />
      <Route element={<Reset />} path="/reset" />
    </Routes>
  );
}
