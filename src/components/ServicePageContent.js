import { Container, Button } from "react-bootstrap";
import { translateText } from "../components/translation";
import ServicePageImag1 from "../Images/servicePage-1.png";
import ServicePageImag2 from "../Images/servicePage-2.png";
import ServicePageImag3 from "../Images/servicePage-3.png";
import ServicePageImag4 from "../Images/servicePage-4.png";
import ServicePageImag5 from "../Images/servicePage-5.png";
import ServicePageImag6 from "../Images/servicePage-6.png";
import ServicePageImag7 from "../Images/servicePage-7.png";
import ServicePageImag8 from "../Images/servicePage-8.png";

export default function ServicePageContent() {
  return (
    <div>
      <div className="kl">
        <Container>
          <div className="ServicePageContentStyle">
            <img src={ServicePageImag1} width="190px" height="180px" alt="22" />
            <h5 style={{ fontWeight: "bold" }}>
              {translateText().serviceHed1}
            </h5>
            <p>{translateText().service1}</p>
          </div>

          <div className="ServicePageContentStyle">
            <img src={ServicePageImag2} width="190px" height="180px" alt="22" />
            <h5 style={{ fontWeight: "bold" }}>
              {translateText().serviceHed2}
            </h5>
            <p>
              <p>{translateText().service2}</p>
            </p>
          </div>

          <div className="ServicePageContentStyle">
            <img src={ServicePageImag3} width="190px" height="180px" alt="22" />
            <h5 style={{ fontWeight: "bold" }}>
              {translateText().serviceHed3}
            </h5>
            <p>
              <p>{translateText().service3}</p>
            </p>
          </div>

          <div className="ServicePageContentStyle">
            <img src={ServicePageImag4} width="190px" height="180px" alt="22" />
            <h5 style={{ fontWeight: "bold" }}>
              {translateText().serviceHed4}
            </h5>
            <p>
              <p>{translateText().service4}</p>
            </p>
          </div>

          <div className="ServicePageContentStyle">
            <img src={ServicePageImag5} width="190px" height="180px" alt="22" />
            <h5 style={{ fontWeight: "bold" }}>
              {translateText().serviceHed5}
            </h5>
            <p>
              <p>{translateText().service5}</p>
            </p>
          </div>

          <div className="ServicePageContentStyle">
            <img src={ServicePageImag6} width="190px" height="180px" alt="22" />
            <h5 style={{ fontWeight: "bold" }}>
              {translateText().serviceHed6}
            </h5>
            <p>
              <p>{translateText().service6}</p>
            </p>
          </div>

          <div className="ServicePageContentStyle">
            <img src={ServicePageImag7} width="190px" height="180px" alt="22" />
            <h5 style={{ fontWeight: "bold" }}>
              {translateText().serviceHed7}
            </h5>
            <p>
              <p>{translateText().service7}</p>
            </p>
          </div>

          <div className="ServicePageContentStyle">
            <img src={ServicePageImag8} width="228px" height="180px" alt="22" />
            <h5 style={{ fontWeight: "bold" }}>
              {translateText().serviceHed8}
            </h5>

            <p>
              <p>{translateText().service8}</p>
            </p>
          </div>
          <Button href="/" className="mb-5">
            {translateText().ReferencesBackHomeButton}
          </Button>
        </Container>
      </div>
    </div>
  );
}
