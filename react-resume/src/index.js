import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Skills from "./pages/Skills";
import Ambitions from "./pages/Ambitions";
import Experience from "./pages/Experience";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter basename="/react-resume">
      <Routes>
        <Route path="/" element={<Skills />} />
        <Route path="/ambitions" element={<Ambitions />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
