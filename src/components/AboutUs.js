import React from "react";
import "../App.css";
import { Container } from "react-bootstrap";
import { translateText } from "../components/translation";

export default function AboutUs() {
  return (
    <div className="aboutUsContainerStyle">
      <Container>
        <div className="AboutUsPageStyle">
          <h2 style={{ fontWeight: "700" }}>
            {translateText().AboutUsHeading}
          </h2>
          <p>{translateText().AboutUs}</p>
        </div>
      </Container>
    </div>
  );
}
