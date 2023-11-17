import React from "react";
import { Carousel } from "react-bootstrap";

export default function Carousels() {
  return (
    // <Container>
    <Carousel className="mb-2">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://egesuaritmasistemleri.com/tema/genel/uploads/slider/slider3.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://egesuaritmasistemleri.com/tema/genel/uploads/slider/slider1.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://egesuaritmasistemleri.com/tema/genel/uploads/slider/slider4.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://egesuaritmasistemleri.com/tema/genel/uploads/slider/slider2.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    // </Container>
  );
}
