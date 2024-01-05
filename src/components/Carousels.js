import React from "react";
import { Carousel } from "react-bootstrap";
import CarouselPhoto1 from "../Images/CarouselPhoto-1.webp";
import CarouselPhoto2 from "../Images/CarouselPhoto-2.webp";
import CarouselPhoto3 from "../Images/CarouselPhoto-3.webp";
import CarouselPhoto4 from "../Images/CarouselPhoto-4.webp";

export default function Carousels() {
  return (
    // <Container>
    <Carousel className="mb-2">
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={CarouselPhoto1} alt="First slide" />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={CarouselPhoto2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={CarouselPhoto3} alt="Third slide" />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={CarouselPhoto4} alt="Third slide" />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    // </Container>
  );
}
