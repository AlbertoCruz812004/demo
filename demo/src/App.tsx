import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/sign-up/SignUp";
import Dashboard from "./pages/dashboard/Dashboard";
import Result from "./pages/result/Result";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  )
}
