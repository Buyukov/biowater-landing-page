import { Button, Container, Row, Col } from "react-bootstrap";
import { translateText } from "../components/translation";

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
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/ikon3-1.png"
                width="100%"
                height="100%"
                alt="01"
              />
            </Col>
            <Col sm={6}>
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/ikon3-2.png"
                width="100%"
                height="100%"
                alt="02"
              />
            </Col>
            <Col sm={6}>
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/ikon3-3.png"
                width="100%"
                height="100%"
                alt="03"
              />
            </Col>
            <Col sm={6}>
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/ikon3-4.png"
                width="100%"
                height="100%"
                alt="04"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
