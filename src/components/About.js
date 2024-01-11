import { Row, Container, Col, Button, Image } from "react-bootstrap";
import { translateText } from "../helpers/translation";
import WebLogo from "../Logo1.png";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className="maintitle marginTop-5rem">
      <Container className="mb-5 mt-3">
        <Row className="">
          <Col sm={7} style={{ display: "flex", alignItems: "center" }}>
            <Image
              // className="padding-7rem"
              src={WebLogo}
              width="100%"
              alt="AboutUsImg"
              fluid 
              rounded
            />
          </Col>

          <Col>
            <h1 style={{ fontWeight: "700" }}>
              {translateText().AboutUsHeading}
            </h1>
            <p>{translateText().ForAbout}</p>
            <Button variant="outline-primary" as={NavLink} to="/about">
              {translateText().viewAll}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
