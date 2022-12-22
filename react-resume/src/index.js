import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {
  Switch,
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
      <Switch>
        <Route path="/">
          <Skills />
        </Route>
        <Route path="/ambitions">
          <Ambitions />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
      </Switch>
    </HashRouter>
  </StrictMode>,
  rootElement
);
