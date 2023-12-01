import { Button, Container, Row, Col } from "react-bootstrap";
import { translateText } from "../components/translation";
import ServiceImage1 from "../Images/service-1.png";
import ServiceImage2 from "../Images/service-2.png";
import ServiceImage3 from "../Images/service-3.png";
import ServiceImage4 from "../Images/service-4.png";

export default function Services() {
  return (
    <div className="services">
      <div className="padding-top-1rem pack">
        <h2 style={{ fontWeight: "750" }}>{translateText().package}</h2>
        <Button className="PackagesButton" href="services">
          {translateText().viewAll}
        </Button>
      </div>

      <Container>
        <div style={{ padding: "0px 1rem 3rem" }}>
          <Row className="mt-3">
            <Col sm={6}>
              <img src={ServiceImage1} width="100%" height="100%" alt="01" />
            </Col>
            <Col sm={6}>
              <img src={ServiceImage2} width="100%" height="100%" alt="02" />
            </Col>
            <Col sm={6}>
              <img src={ServiceImage3} width="100%" height="100%" alt="03" />
            </Col>
            <Col sm={6}>
              <img src={ServiceImage4} width="100%" height="100%" alt="04" />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
