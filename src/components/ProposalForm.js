import { Container, Row, Col } from "react-bootstrap";
import { translateText } from "./translation";
import PropsonalPhoto from "../Images/PropsonalPhoto.png";
import { handleSubmit } from "../components/form";

export default function ProposalForm() {
  return (
    <div className="propBackgr">
      <Container className="pt-4 pb-4">
        <Row>
          <Col sm={6} className="propCol">
            <div>
              <img
                src={PropsonalPhoto}
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

                <form onSubmit={handleSubmit}>
                  <Col sm={12}>
                    <div>
                      <label htmlFor="full_name">{translateText().propForm2}</label>
                    </div>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      placeholder="Full name"
                      autoFocus
                      className="propsonalInputStyle"
                    ></input>

                    <div>
                      <label htmlFor="Phone" style={{ paddingTop: "0.5rem" }}>
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
                      <label htmlFor="email" style={{ paddingTop: "0.5rem" }}>
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
                      <label htmlFor="textArea" style={{ paddingTop: "0.5rem" }}>
                        {translateText().propForm5}
                      </label>
                    </div>
                    <textarea
                      id="textArea"
                      name="textArea"
                      rows="5"
                      cols="43"
                      className="propExplanationStyle"
                      style={{ color: "#fff", width: "100%" }}
                    ></textarea>

                    <div>
                      <button type="submit" className="propSubmitButtonStyle">
                      {translateText().sendButton}
                      </button>
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
