import { Container } from "react-bootstrap";
import Referense1 from "../Images/Referense-1.png";
import Referense2 from "../Images/referense-2.png";
import Referense3 from "../Images/referense-3.png";
import Referense4 from "../Images/referense-4.png";
import Referense5 from "../Images/referense-5.png";
import Referense6 from "../Images/referense-6.png";

export default function ProductTypes() {
  return (
    <Container className="mt-5 pb-5">
      <div className="ImageWrapper">
        <div className="ImageWrapperItem itemss">
          {/* <a href="References"> */}
          <img src={Referense1} alt="" width="100%" />
          {/* </a> */}
        </div>
        <div className="ImageWrapperItem itemss">
          {/* <a href="References"> */}
          <img src={Referense2} alt="" width="100%" />
          {/* </a> */}
        </div>
        <div className="ImageWrapperItem itemss">
          {/* <a href="References"> */}
          <img src={Referense3} alt="" width="100%" />
          {/* </a> */}
        </div>
        <div className="ImageWrapperItem itemss">
          {/* <a href="References"> */}
          <img src={Referense4} alt="" width="100%" />
          {/* </a> */}
        </div>
        <div className="ImageWrapperItem itemss">
          {/* <a href="References"> */}
          <img src={Referense5} alt="" width="100%" />
          {/* </a> */}
        </div>
        <div className="ImageWrapperItem itemss">
          {/* <a href="References"> */}
          <img src={Referense6} alt="" width="100%" />
          {/* </a> */}
        </div>
      </div>
    </Container>
  );
}
