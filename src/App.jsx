
import supabase from "./config/supabaseClient";
import Home from "./pages/Home";
import RegisterUser from "./pages/RegisterUser";
import LogginUser from "./pages/LogginUser";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  console.log(supabase.auth)
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="/login" element={<LogginUser/>} />
      <Route path="/dashbaord" element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
