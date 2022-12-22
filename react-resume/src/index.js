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
    <HashRouter basename={`process.env.PUBLIC_URL`}>
      <Routes>
        <Route path="/" component={Skills} />
        <Route path="/ambitions" component={Ambitions} />
        <Route path="/experience" component={Experience} />
      </Routes>
    </HashRouter>
  </StrictMode>,
  rootElement
);
