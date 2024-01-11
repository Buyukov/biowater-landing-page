import { Container, Button } from "react-bootstrap";
import "../App.css";
import { translateText } from "../helpers/translation";
import { NavLink } from "react-router-dom";

export default function ReferencesContent() {
  return (
    <div>
      <div className="ReferencesHeadImgContainer">
        <div className="ReferencesHeadImgItem"></div>
      </div>

      <div style={{ backgroundColor: "#efefef" }}>
        <Container className="pt-2 pb-2">
          <div className="ReferencesContainer">
            <div className="ReferencesItem">
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/1-akkuyu-nukleer.png"
                width="100%"
                alt="ReferencesImg1"
              />
            </div>
            <div className="ReferencesItem">
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/2-cocacola.png"
                width="100%"
                alt="ReferencesImg2"
              />
            </div>
            <div className="ReferencesItem">
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/5-thy.png"
                width="100%"
                alt="ReferencesImg3"
              />
            </div>
            <div className="ReferencesItem">
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/3-nestle.png"
                width="100%"
                alt="ReferencesImg4"
              />
            </div>

            <div className="ReferencesItem">
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/7-kocholding.png"
                width="100%"
                alt="ReferencesImg5"
              />
            </div>
            <div className="ReferencesItem">
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/4-bjk.png"
                width="100%"
                alt="ReferencesImg6"
              />
            </div>
            <div className="ReferencesItem">
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/6-hayatsu.png"
                width="100%"
                alt="ReferencesImg7"
              />
            </div>
            <div className="ReferencesItem">
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/8-alarko.png"
                width="100%"
                alt="ReferencesImg8"
              />
            </div>

            <div className="ReferencesItem">
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/2dardanelcanakkale.png"
                width="100%"
                alt="ReferencesImg9"
              />
            </div>
            <div className="ReferencesItem">
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/9-termotek.png"
                width="100%"
                alt="ReferencesImg10"
              />
            </div>
            <div className="ReferencesItem">
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/10-bimeks.png"
                width="100%"
                alt="ReferencesImg11"
              />
            </div>
            <div className="ReferencesItem">
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/15-eker.png"
                width="100%"
                alt="ReferencesImg12"
              />
            </div>

            <div className="ReferencesItem">
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/13-bilsevgroup.png"
                width="100%"
                alt="ReferencesImg13"
              />
            </div>
            <div className="ReferencesItem">
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/17-baymetal.png"
                width="100%"
                alt="ReferencesImg14"
              />
            </div>
            <div className="ReferencesItem">
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/14-sofragrup.png"
                width="100%"
                alt="ReferencesImg15"
              />
            </div>
            <div className="ReferencesItem">
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/16-agrotek.png"
                width="100%"
                alt="ReferencesImg16"
              />
            </div>

            <div className="ReferencesItem">
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/18-linarossa.png"
                width="100%"
                alt="ReferencesImg17"
              />
            </div>
            <div className="ReferencesItem">
              <img
                src="	https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/19-yakamoz.png"
                width="100%"
                alt="ReferencesImg18"
              />
            </div>
            <div className="ReferencesItem">
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/20-chrysamed.png"
                width="100%"
                alt="ReferencesImg19"
              />
            </div>
            <div className="ReferencesItem">
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/21-guloglu.png"
                width="100%"
                alt="ReferencesImg20"
              />
            </div>

            <div className="ReferencesItem">
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/22-k%C4%B1rcicegi.png"
                width="100%"
                alt="ReferencesImg21"
              />
            </div>
            <div className="ReferencesItem">
              <img
                src="	https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/23-laber.png"
                width="100%"
                alt="ReferencesImg22"
              />
            </div>
            <div className="ReferencesItem">
              <img
                src="https://egesuaritmasistemleri.com/tema/genel/uploads/referanslar/24-batmaz.png"
                width="100%"
                alt="ReferencesImg23"
              />
            </div>
            <Button as={NavLink} to="/">{translateText().ReferencesBackHomeButton}</Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
