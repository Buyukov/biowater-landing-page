import "./App.css";
import Navigation from "./components/Nav";
import Carousels from "./components/Carousels";
import About from "./components/About";
import SomePictures from "./components/SomePictures";
// import Services from "./components/Services";
import ProductTypes from "./components/ProductTypes";
import ProposalForm from "./components/ProposalForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navigation />
      <Carousels />
      <ProductTypes />
      <About />
      <SomePictures />
      {/* <Services /> */}
      <ProposalForm />
      <Footer />
    </>
  );
}
