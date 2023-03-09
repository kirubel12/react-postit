
import supabase from "./config/supabaseClient";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  console.log(supabase.auth)
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashbaord" element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
