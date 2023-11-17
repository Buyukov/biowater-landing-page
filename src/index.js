import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ServicesPage from "./Pages/ServicesPage";
import AboutUsPage from "./Pages/AboutUsPage";
// import References from "./Pages/References";
import ProductsPage from "./Pages/ProductsPage";
import MobilContact from "./Pages/MobilContact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function setDefaultLanguageAction() {
  let defaultLanguageAction = localStorage.getItem("defaultLanguageAction");

  if (defaultLanguageAction === null) {
    localStorage.setItem("language", "uz");
    localStorage.setItem("defaultLanguageAction", true);
  }
}

setDefaultLanguageAction();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "aboutUs",
    element: <AboutUsPage />,
  },

  {
    path: "services",
    element: <ServicesPage />,
  },

  // {
  //   path: "References",
  //   element: <References />,
  // },

  {
    path: "Procuts",
    element: <ProductsPage />,
  },

  {
    path: "MobilRaqam",
    element: <MobilContact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
