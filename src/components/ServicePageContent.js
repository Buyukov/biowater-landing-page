import { Container, Button } from "react-bootstrap";
import { translateText } from "../components/translation";

export default function ServicePageContent() {
  return (
    <div>
      <div className="kl">
        <Container>
          <div className="ServicePageContentStyle">
            <img
              src="https://egesuaritmasistemleri.com/uploads/files/kesif2.png"
              width="190px"
              height="180px"
              alt="22"
            />
            <h5 style={{ fontWeight: "bold" }}>
              {translateText().serviceHed1}
            </h5>
            <p>{translateText().service1}</p>
          </div>

          <div className="ServicePageContentStyle">
            <img
              src="https://egesuaritmasistemleri.com/uploads/files/projelendirme2.png"
              width="190px"
              height="180px"
              alt="22"
            />
            <h5 style={{ fontWeight: "bold" }}>
              {translateText().serviceHed2}
            </h5>
            <p>
              <p>{translateText().service2}</p>
            </p>
          </div>

          <div className="ServicePageContentStyle">
            <img
              src="https://egesuaritmasistemleri.com/uploads/files/uretim2.png"
              width="190px"
              height="180px"
              alt="22"
            />
            <h5 style={{ fontWeight: "bold" }}>
              {translateText().serviceHed3}
            </h5>
            <p>
              <p>{translateText().service3}</p>
            </p>
          </div>

          <div className="ServicePageContentStyle">
            <img
              src="https://egesuaritmasistemleri.com/uploads/files/montaj2.png"
              width="190px"
              height="180px"
              alt="22"
            />
            <h5 style={{ fontWeight: "bold" }}>
              {translateText().serviceHed4}
            </h5>
            <p>
              <p>{translateText().service4}</p>
            </p>
          </div>

          <div className="ServicePageContentStyle">
            <img
              src="https://egesuaritmasistemleri.com/uploads/files/periyodikbakim2.png"
              width="190px"
              height="180px"
              alt="22"
            />
            <h5 style={{ fontWeight: "bold" }}>
              {translateText().serviceHed5}
            </h5>
            <p>
              <p>{translateText().service5}</p>
            </p>
          </div>

          <div className="ServicePageContentStyle">
            <img
              src="https://egesuaritmasistemleri.com/uploads/files/7-24servis2.png"
              width="190px"
              height="180px"
              alt="22"
            />
            <h5 style={{ fontWeight: "bold" }}>
              {translateText().serviceHed6}
            </h5>
            <p>
              <p>{translateText().service6}</p>
            </p>
          </div>

          <div className="ServicePageContentStyle">
            <img
              src="https://egesuaritmasistemleri.com/uploads/files/Kimyasaltedarigi3.png"
              width="190px"
              height="180px"
              alt="22"
            />
            <h5 style={{ fontWeight: "bold" }}>
              {translateText().serviceHed7}
            </h5>
            <p>
              <p>{translateText().service7}</p>
            </p>
          </div>

          <div className="ServicePageContentStyle">
            <img
              src="https://egesuaritmasistemleri.com/uploads/files/yedekparca2.png"
              width="190px"
              height="180px"
              alt="22"
            />
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
