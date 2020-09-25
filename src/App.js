import React from "react";
import "./styles.css";
import Inicio from "./pages/Inicio"
import CntNavbar from "./components/CntNavbar";
export default function App() {
  return (
    <div className="App">
      <CntNavbar />
      <Inicio />
    </div>
  );
}
