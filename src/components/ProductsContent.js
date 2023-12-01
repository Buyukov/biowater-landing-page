import { Container, Card, ListGroup } from "react-bootstrap";
import { translateText } from "../components/translation";
import ProductImage1 from "../Images/product-1.jpg";
import ProductImage2 from "../Images/product-2.jpg";
import ProductImage3 from "../Images/product-3.jpg";
import ProductImage4 from "../Images/product-4.jpg";
import ProductImage5 from "../Images/product-5.png";
import ProductImage6 from "../Images/product-6.jpg";
import ProductImage7 from "../Images/product-7.png";
import ProductImage8 from "../Images/product-8.jpg";
import ProductImage9 from "../Images/product-9.jpg";
import ProductImage10 from "../Images/product-10.jpg";
import ProductImage11 from "../Images/product-11.jpg";
import ProductImage12 from "../Images/product-12.jpg";
import ProductImage13 from "../Images/product-13.png";
import ProductImage14 from "../Images/product-14.png";
import ProductImage15 from "../Images/product-15.png";
import ProductImage16 from "../Images/product-16.png";
import ProductImage17 from "../Images/product-17.png";
import ProductImage18 from "../Images/product-18.jpg";
import ProductImage19 from "../Images/product-19.png";
import ProductImage20 from "../Images/product-20.png";
import ProductImage21 from "../Images/product-21.png";
import ProductImage22 from "../Images/product-22.png";
import ProductImage23 from "../Images/product-23.png";
import ProductImage24 from "../Images/product-24.png";

export default function ProductsContent() {
  return (
    <Container>
      <div className="ProductContentContainer">
        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage1} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                {translateText().ProductsContetWords1} <br /> <br />
              </Card.Text>
            </Card.Body>

            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage2} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                MBR Systems - Mbr2 <br /> <br />
              </Card.Text>
            </Card.Body>

            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage3} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                MBR Systems - Mmbr1 <br />
                <br />
              </Card.Text>
            </Card.Body>

            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage4} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>{translateText().ProductsContetWords2}</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage5} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>{translateText().ProductsContetWords3}</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage6} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>{translateText().ProductsContetWords4}</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage7} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>{translateText().ProductsContetWords5}</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage8} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                {translateText().ProductsContetWords6}
                <br /> <br />
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="MobilRaqam">
                <Card.Link href="MobilRaqam">
                  {translateText().ContactForBuy}
                </Card.Link>
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage9} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                {translateText().ProductsContetWords7}
                <br /> <br />
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage10} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                {translateText().ProductsContetWords8}
                <br /> <br />
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage11} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                {translateText().ProductsContetWords9}
                <br /> <br />
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage12} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                {translateText().ProductsContetWords10}
                <br /> <br />
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage13} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                Bwt Multi C 3000
                <br /> <br />
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage14} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                {translateText().ProductsContetWords11}
                <br /> <br />
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage15} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                BWT Perla Silk
                <br /> <br />
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage16} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                {translateText().ProductsContetWords12}
                <br /> <br />
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage17} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                AQUADIAL Softline Bio
                <br /> <br />
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage18} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                {translateText().ProductsContetWords13}
                <br />
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage19} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                {translateText().ProductsContetWords14}
                <br />
                <br />
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage20} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                {translateText().ProductsContetWords15}
                <br />
                <br />
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage21} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                {translateText().ProductsContetWords19}
                <br />
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage22} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                {translateText().ProductsContetWords16}
                <br />
                <br />
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage23} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                {translateText().ProductsContetWords17}
                <br />
                <br />
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ProductImage24} height="200px" />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                {translateText().ProductsContetWords18}
                <br />
                <br />
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="MobilRaqam">
                {translateText().ContactForBuy}
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}
