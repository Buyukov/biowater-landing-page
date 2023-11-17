import { translateText } from "../components/translation";

export default function MobilContactContent() {
  return (
    <div>
      <div className="ReferencesHeadImgContainer2">
        <div className="ReferencesHeadImgItem2"></div>
      </div>

      <div className="MobilConContainer" style={{ margin: "2rem" }}>
        <div className="MobilConItem">
          <div>
            <img
              src="https://i.pinimg.com/originals/84/4e/8c/844e8cd4ab26c82286238471f0e5a901.png"
              height="60px"
              alt=""
            />
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
            <img
              src="https://cdn-icons-png.flaticon.com/512/5962/5962750.png"
              height="60px"
              alt=""
            />
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
            <img
              src="https://static-00.iconduck.com/assets.00/gmail-icon-512x512-5ls3l61s.png"
              height="60px"
              alt=""
            />
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
