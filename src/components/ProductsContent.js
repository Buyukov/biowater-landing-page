import { Container, Card, ListGroup } from "react-bootstrap";
import { translateText } from "../components/translation";

export default function ProductsContent() {
  return (
    <Container>
      <div className="ProductContentContainer">
        <div className="ProductContentItem">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="	https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/grisu.jpg"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="	https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/mbr1.jpg"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="	https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/mbbr1.jpg"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="	https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/betonarme-biyolojik-su-aritma1.jpg"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/Paket-Ar%C4%B1tma-Sistemleri.png"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/ters-ozmoz1.jpg"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/endustryel.png"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/UF2.jpg"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/kum-filtrre1.jpg"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/Karbon-filtre.jpg"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/kum-filtrre1_1.jpg"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/Yuzey-Borulamal%C4%B1-sistemler2.jpg"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/Bwt_Multi_C_3000.png"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/tandemyumusatma3134.png"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/BWT_Perla_silk.png"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/tandemyumusatma3134_1.png"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/BWTB-11360_1.png"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/uv2.jpg"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/slimuffiltre5.png"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/Slim_4_Tezgah_AltY_Su_ArYtma.png"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/12ltkapal%C4%B1-kasa.png"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/814133_1.png"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/Ters_Osmoz_White_Aqua_Sebil.png"
              height="200px"
            />
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
            <Card.Img
              variant="top"
              src="https://egesuaritmasistemleri.com/tema/genel/uploads/urunler/8ltkapal%C4%B1-kasa.png"
              height="200px"
            />
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
