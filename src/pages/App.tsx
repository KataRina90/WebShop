import { Color, IBrand, IProduct, Size } from "../Products/Product";
import { ProductList } from "../Products/ProductList";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchCriteria from "../search/Search";

export default function App() {
  return (
    <Container>
      <Row>
        <Col sm={10}>
          {" "}
          <h1 style={{ textAlign: "center" }}> TShirt </h1>{" "}
        </Col>
        <Col sm={1}>
          {" "}
          <button> LogIn </button>
        </Col>
        <Col sm={1}>
          {" "}
          <button> Basket </button>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          {" "}
          <SearchCriteria />{" "}
        </Col>
        <Col sm={8}>
          {" "}
          <ProductList />{" "}
        </Col>
      </Row>
    </Container>
  );
}
