import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ScrollToTop from "./helpers/scrollToTop";
import { BrowserRouter  as Router } from "react-router-dom";
function setDefaultLanguageAction() {
  let defaultLanguageAction = localStorage.getItem("defaultLanguageAction");
  if (defaultLanguageAction === null) {
    localStorage.setItem("language", "uz");
    localStorage.setItem("defaultLanguageAction", true);
  }
}
setDefaultLanguageAction();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>
);
reportWebVitals();
