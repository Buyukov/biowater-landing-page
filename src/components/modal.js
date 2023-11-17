import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { translateText } from "../components/translation";

export default function Example() {
  const [smShow, setSmShow] = useState(false);
  //   const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button
        onClick={() => setSmShow(true)}
        className="navButton marginRight-1Rem fontSize13px"
      >
        {translateText().nav6}
      </Button>
      {/* <Button onClick={() => setLgShow(true)}>Large modal</Button> */}
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            {translateText().propForm3}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>+99899 999 99 99</Modal.Body>
      </Modal>

      {/* <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal> */}
    </>
  );
}
