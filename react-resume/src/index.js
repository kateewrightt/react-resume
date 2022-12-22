import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Skills from "./pages/Skills";
import Ambitions from "./pages/Ambitions";
import Experience from "./pages/Experience";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <HashRouter basename="/">
      <Routes>
        <Route path="/react-resume" element={<Skills />} />
        <Route path="/react-resume/ambitions" element={<Ambitions />} />
        <Route path="/react-resume/experience" element={<Experience />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
  rootElement
);
