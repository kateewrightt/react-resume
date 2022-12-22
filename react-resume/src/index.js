import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Skills from "./pages/Skills";
import Ambitions from "./pages/Ambitions";
import Experience from "./pages/Experience";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Skills />} />
        <Route path="/ambitions" element={<Ambitions />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
  rootElement
);
