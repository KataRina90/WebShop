import React from "react";
import { useContext } from "react";
import { Card, Col, Container, Dropdown, Row } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { useParams } from "react-router-dom";
import { useBasketProvider } from "../basket/basketContext";
import { IProduct } from "./Product";
import { ProductListContext } from "./ProductListContext";

export function ProductDetails() {
  const { id } = useParams(); // vraca id zadnje putanje na koju je stigao u tom trenutku . inace useParams vraca sve parametre iz putanje kao properties jednog objekta.
  const list = useContext(ProductListContext);
  const productDetail = list.find((e) => e.id === id) as IProduct; //uvek tretiraj kao IProduct, u suprotnom moze da bude undefined
  const [basket, dispatch] = useBasketProvider()
  const [chosenSize, setChosenSize] = React.useState('');
  const handleSizeChange = (e: any) => {
    setChosenSize(e.target.value);
  };
  const [chosenColor, setChosenColor] = React.useState('');
  const handleColorChange= (e:any) => {
    setChosenColor(e.target.value)
  }

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
            <label>
              Select your size: 
              <select value={chosenSize} onChange={handleSizeChange}>
                {productDetail.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Select color: 
              <select value={chosenColor} onChange={handleColorChange}>
                {productDetail.colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </label>

            <p>
              {" "}
              {productDetail.colors.map((e) => (
                <span> {e}</span>
              ))}{" "}
            </p>
            <p> Product description: {productDetail.description} </p>

            <button onClick={e => dispatch({
              type: "addItem",
              productId: productDetail.id,
              amount: 1,
              color: chosenColor,
              size: chosenSize,
              price: productDetail.price
            })}> Add to basket </button>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
