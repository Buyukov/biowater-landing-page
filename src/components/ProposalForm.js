import { Container, Row, Col } from "react-bootstrap";
import { translateText } from "./translation";

export default function ProposalForm() {
  return (
    <div className="propBackgr">
      <Container className="pt-4 pb-4">
        <Row>
          <Col sm={6} className="propCol">
            <div>
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/arkaplan/arkaplan23/image3-home1.png"
                className="PropImg"
                alt="THIS WEBSITE WAS CREATED BY DILMUROD BUYUKOV"
              />
            </div>
          </Col>
          <Col sm={1} className="propCol">
            <div></div>
          </Col>
          <Col sm={5} className="propCol p-3">
            <div>
              <Row>
                <Col sm={12}>
                  <h2>{translateText().propForm1}</h2>
                </Col>

                <form>
                  <Col sm={12}>
                    <div>
                      <label for="first_name">
                        {translateText().propForm2}
                      </label>
                    </div>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      placeholder="Name"
                      autofocus
                      className="propsonalInputStyle"
                    ></input>

                    <div>
                      <label for="Phone" style={{ paddingTop: "0.5rem" }}>
                        {translateText().propForm3}
                      </label>
                    </div>
                    <input
                      type="tel"
                      id="Phone"
                      name="phone"
                      placeholder="Phone Number"
                      className="propsonalInputStyle"
                    />
                  </Col>
                  <Col sm={12}>
                    <div>
                      <label for="email" style={{ paddingTop: "0.5rem" }}>
                        {translateText().propForm4}
                      </label>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Adress"
                      className="propsonalInputStyle"
                    />
                  </Col>
                  <Col>
                    <div>
                      <label for="textArea" style={{ paddingTop: "0.5rem" }}>
                        {translateText().propForm5}
                      </label>
                    </div>
                    <textarea
                      id="textArea"
                      name="textArea"
                      rows="4"
                      cols="37"
                      className="propExplanationStyle"
                    ></textarea>

                    <div>
                      <input type="Submit" className="propSubmitButtonStyle" />
                    </div>
                  </Col>
                </form>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
