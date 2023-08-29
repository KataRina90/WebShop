import { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { IProduct } from "./Product";
import { ProductListContext } from "./ProductListContext";

export function ProductDetails() {
  const { id } = useParams(); // vraca id zadnje putanje na koju je stigao u tom trenutku . inace useParams vraca sve parametre iz putanje kao properties jednog objekta.
  const list = useContext(ProductListContext);
  const productDetail = list.find((e) => e.id === id) as IProduct; //uvek tretiraj kao IProduct, u suprotnom moze da bude undefined
  return (
    <Container>
      <Row>
        <Col sm={9}>
          <Container>
            <Card style={{ width: "18rem", cursor: "pointer" }}>
              <Card.Img
                variant="top"
                src={productDetail.imageURL}
                width="300"
                height="300"
              />
            </Card>
          </Container>
        </Col>

        <Col sm={3}>
          <Container>
            <h1> {productDetail.brand.brandName} </h1>
            <h4> {productDetail.name} </h4>
            <p> {productDetail.price} EUR </p>
            <p>
              {" "}
              {productDetail.sizes.map((e) => (
                <span> {e}</span>
              ))}{" "}
            </p>
            <p>
              {" "}
              {productDetail.colors.map((e) => (
                <span> {e}</span>
              ))}{" "}
            </p>
            <p> Product description: {productDetail.description} </p>

            <button> Add to basket </button>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
