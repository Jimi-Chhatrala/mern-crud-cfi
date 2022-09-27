import logo from "./logo.svg";
import "./App.css";
import AddUser from "./components/AddUser";
import NavBar from "./components/NavBar";
import Merncrud from "./components/Merncrud";
import AllUsers from "./components/AllUsers";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Merncrud />} />
        <Route path="all" element={<AllUsers />} />
        <Route path="add" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
