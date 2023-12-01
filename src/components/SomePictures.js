import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
import WebLogo from "../Logo1.png";
import SomePic from "../Images/SomePic-1.jpg";
import SomePi2 from "../Images/somePic-2.jpg";

export default function SomePictures() {
  return (
    <Container className="mb-5">
      <Row>
        <Col sm={6}>
          <div className="somePicItems">
            {/* <div class="flip-card"> */}
            {/* <div class="flip-card-inner"> */}
            {/* <div class="flip-card-front"> */}
            <img src={SomePic} alt="Avatar" className="somePicImgStyle" />
          </div>
          {/* <div class="flip-card-back"> */}
          {/* <img
            // className="padding-7rem"
            src={WebLogo}
            width="100%"
            height="100%"
            alt="AboutUsImg"
            fluid
            rounded
          /> */}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </Col>
        <Col sm={6}>
          <div className="somePicItems">
            {/* <div class="flip-card"> */}
            {/* <div class="flip-card-inner"> */}
            {/* <div class="flip-card-front"> */}
            <img src={SomePi2} alt="Avatar" className="somePicImgStyle" />
          </div>
          {/* <div class="flip-card-back">
            <img
              // className="padding-7rem"
              src={WebLogo}
              width="100%"
              height="100%"
              alt="AboutUsImg"
              fluid
              rounded
            />
          </div> */}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </Col>
      </Row>
    </Container>
  );
}
