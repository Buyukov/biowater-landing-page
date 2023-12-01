import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import Modals from "../components/modal";
import { translateText, editLanguage } from "../components/translation";
import React from "react";
import WebLogo from "../Logo1.png";
import RussianFlag from "../Images/RussianFlag.png";
import TurkishFlag from "../Images/TurkishFlag.png";
import UzbekFlag from "../Images/UzbekFlag.webp";

export default function Navigation() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary padding-1-5rem font-weight-700 positionSticky"
    >
      {/* <Container fluid> */}

      <div className="nLogo">
        <Navbar.Brand href="/">
          <img src={WebLogo} width="120px" alt="Logo" />
        </Navbar.Brand>
      </div>

      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link
            href="/"
            style={{ display: "flex", alignItems: "center" }}
            className="fontSize13px"
          >
            {translateText().nav1}
          </Nav.Link>

          <Nav.Link
            href="aboutUs"
            id="padding-left-3rem"
            style={{ display: "flex", alignItems: "center" }}
            className="fontSize13px"
          >
            {translateText().nav2}
          </Nav.Link>

          <Nav.Link
            href="Procuts"
            id="padding-left-3rem"
            style={{ display: "flex", alignItems: "center" }}
            className="fontSize13px"
          >
            {translateText().nav3}
          </Nav.Link>

          {/* <Nav.Link
            href="References"
            style={{ display: "flex", alignItems: "center" }}
            className="fontSize13px"
          >
            {translateText().nav5}
          </Nav.Link> */}

          <Nav.Link
            href="services"
            style={{ display: "flex", alignItems: "center" }}
            className="fontSize13px"
          >
            {translateText().nav4}
          </Nav.Link>

          <Nav.Link
            href="MobilRaqam"
            style={{ display: "flex", alignItems: "center" }}
            className="fontSize13px"
          >
            {translateText().nav6}
          </Nav.Link>

          {/* <Nav.Link href="#" disabled>
            Link
          </Nav.Link> */}
        </Nav>
        <Form className="d-flex">
          <span className="flag">
            <span>
              <Modals />
            </span>
          </span>
        </Form>
        <Form>
          <span>
            <img
              className="marginRight-1Rem"
              src={RussianFlag}
              width="40px"
              alt="ru"
              onClick={editLanguage}
            />

            <img
              className="marginRight-1Rem"
              src={TurkishFlag}
              width="40px"
              alt="turk"
              onClick={editLanguage}
            />

            <img
              className="s1"
              src={UzbekFlag}
              width="40px"
              alt="uz"
              onClick={editLanguage}
            />
          </span>
        </Form>

        {/* <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}
