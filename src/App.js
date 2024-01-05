import * as React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from './layout/Main'
import HomePage from './Pages/Home'
import ServicesPage from "./Pages/ServicesPage";
import AboutUsPage from "./Pages/AboutUsPage";
// import References from "./Pages/References";
import ProductsPage from "./Pages/ProductsPage";
import MobilContact from "./Pages/MobilContact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<MobilContact />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
