import { translateText } from "../components/translation";
import PhonoIcon from "../Images/PhoneIcon.png";
import LocationIcon from "../Images/LocationIcon.png";
import GmailIcon from "../Images/gmailIcon.png";

export default function MobilContactContent() {
  return (
    <div>
      <div className="ReferencesHeadImgContainer2">
        <div className="ReferencesHeadImgItem2"></div>
      </div>

      <div className="MobilConContainer" style={{ margin: "2rem" }}>
        <div className="MobilConItem">
          <div>
            <img src={PhonoIcon} height="60px" alt="" />
          </div>

          <div style={{ marginTop: "1rem" }}>
            <p style={{ color: "grey" }}>{translateText().propForm3}</p>
          </div>

          <div>
            <p style={{ color: "grey" }}>+99899 999 99 99</p>
          </div>
        </div>

        <div className="MobilConItem">
          <div>
            <img src={LocationIcon} height="60px" alt="" />
          </div>

          <div style={{ marginTop: "1rem" }}>
            <p style={{ color: "grey" }}>{translateText().footerLan8}</p>
          </div>

          <div>
            <p style={{ color: "grey" }}>Jizzax Shaxar</p>
          </div>
        </div>

        <div className="MobilConItem">
          <div>
            <img src={GmailIcon} height="60px" alt="" />
          </div>

          <div style={{ marginTop: "1rem" }}>
            <p style={{ color: "grey" }}>GMAIL</p>
          </div>

          <div>
            <p style={{ color: "grey" }}>GMAIL@GMAIL.COM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
