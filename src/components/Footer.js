import { Container, Row, Col } from "react-bootstrap";
import { translateText } from "../components/translation";
import WebLogo from "../Logo1.png";
// import React from "react";

export default function Footer() {
  return (
    <div className="footer-div">
      <Container className="mt-3 mb-3">
        <Row>
          <Col sm={5}>
            <div>
              <a href="/">
                <img
                  src={WebLogo}
                  alt="footerLogo"
                  className="FooterLogoStyle"
                  style={{
                    margin: "1rem",
                    width: "60%",
                  }}
                />
              </a>
            </div>
            <div>
              <p style={{ margin: "1rem" }}>{translateText().footerFor}</p>
            </div>
            <div
              style={{
                margin: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              {/* <span className="FooterSpan">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
                  height="28px"
                  alt="InstagramIcon"
                />{" "}
                instagram
              </span>
              <span className="FooterSpan">
                {" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                  alt="FacebootIcon"
                  height="28px"
                />{" "}
                Facebook
              </span>
              <span className="FooterSpan">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
                  alt="LinkedinIcon"
                  height="28px"
                />{" "}
                Linkedin
              </span> */}
            </div>
          </Col>

          <Col sm={2}></Col>

          <Col sm={5}>
            <div>
              <h4>{translateText().footerLan2}</h4>
              <p></p>
            </div>

            <div>
              <h4>{translateText().footerLan3}</h4>
              <p>
                Toshkent shahri, Yashnobod tumani, Parvoz MFY, 1 - Aviasozlar
              </p>
            </div>

            <div>
              <h4>{translateText().footerLan4}</h4>
              <p>Dushanba - Juma: 09:00 - 18:00</p>
            </div>

            <div>
              <h4>{translateText().footerLan5}</h4>
              <p>+998901234567</p>
            </div>

            <div>
              <h4>{translateText().footerLan6}</h4>
              <p>biowater@gmail.com</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col sm={12} className="copyRighter">
            <p>{translateText().footerLan7}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
