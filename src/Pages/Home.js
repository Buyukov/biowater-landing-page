import Carousels from "../components/Carousels";
import About from "../components/About";
import SomePictures from "../components/SomePictures";
// import Services from "./components/Services";
import ProductTypes from "../components/ProductTypes";
import ProposalForm from "../components/ProposalForm";

export default function Home() {
  return (
    <>
      <Carousels />
      <ProductTypes />
      <About />
      <SomePictures />
      {/* <Services /> */}
      <ProposalForm />
    </>
  );
}
