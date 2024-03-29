import { Container, Row, Col } from "react-bootstrap";
import { translateText } from "../helpers/translation";
import WebLogo from "../Logo1.png";
import { NavLink } from "react-router-dom";
// import React from "react";

export default function Footer() {
  return (
    <div className="footer-div">
      <Container className="mt-3 mb-3">
        <Row>
          <Col sm={4}>
            <div>
              <NavLink to="/">
                <img
                  src={WebLogo}
                  alt="footerLogo"
                  className="FooterLogoStyle"
                  style={{
                    margin: "1rem",
                    width: "60%",
                  }}
                />
              </NavLink>
            </div>
            <div>
              <p style={{ margin: "1rem" }}>{translateText().footerFor}. "BIOWATER" MCHJ</p>
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

          <Col sm={3}>
            {/* <div>
              <h4>{translateText().footerLan9}</h4>
              <p></p>
            </div> */}

            <div>
              <h4>{translateText().footerLan10}</h4>
              <p>310 795 217</p>
            </div>
            <div>
              <h4>{translateText().footerLan11}</h4>
              <p>46 900</p>
            </div>
            <div>
              <h4>{translateText().footerLan12}</h4>
              <p>2020 8000 6056  9693 9001</p>
            </div>
            <div>
              <h4>{translateText().footerLan13}</h4>
              <p>2020 8000 6056  9693 9001</p>
            </div>
            <div>
              <h4>{translateText().footerLan14}</h4>
              <p>{translateText().bank}</p>
            </div>
          </Col>
          <Col sm={1}></Col>
          <Col sm={4}>
            <div>
              <h4>{translateText().footerLan2}</h4>
              <p></p>
            </div>

            {/* <div>
              <h4>{translateText().footerLan3}</h4>
              <p>
                Toshkent shahri, Yashnobod tumani, Parvoz MFY, 1 - Aviasozlar
              </p>
            </div> */}

            <div>
              <h4>{translateText().footerLan4}</h4>
              <p>{translateText().workingDays} 09:00 - 18:00</p>
            </div>

            <div>
              <h4>{translateText().footerLan5}</h4>
              <p>+998 99 126 28 28</p>
            </div>

            <div>
              <h4>{translateText().footerLan6}</h4>
              <p>biowateruz@outlook.com</p>
            </div>
            <div>
              <h4>{translateText().footerLan8}</h4>
              <p>{translateText().address}</p>
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
