import React from 'react';
import { useContext } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useBasketProvider } from '../basket/basketContext';
import { IProduct } from './Product';
import { ProductListContext } from './ProductListContext';
import './CardProductDetails.css';

export function ProductDetails() {
  const { id } = useParams(); // vraca id zadnje putanje na koju je stigao u tom trenutku . inace useParams vraca sve parametre iz putanje kao properties jednog objekta.
  const list = useContext(ProductListContext);
  const productDetail = list.find((e) => e.id === id) as IProduct; //uvek tretiraj kao IProduct, u suprotnom moze da bude undefined
  const [basket, dispatch] = useBasketProvider();
  const [chosenSize, setChosenSize] = React.useState(productDetail.sizes[0]);
  const handleSizeChange = (e: any) => {
    setChosenSize(e.target.value);
  };
  const [chosenColor, setChosenColor] = React.useState(productDetail.colors[0]);
  const handleColorChange = (e: any) => {
    setChosenColor(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col sm={9}>
          <Container>
            <Card className='card-style'>
              <Card.Img
                className='card-img'
                variant='top'
                src={productDetail.imageURL}
              />
            </Card>
          </Container>
        </Col>

        <Col sm={3}>
          <Container>
            <h1 className='brand-name'> {productDetail.brand.brandName} </h1>
            <h4 className='product-detail'> {productDetail.name} </h4>
            <p> {productDetail.price} € </p>
            <label className='label-style'>
              Choose size
              <select
                className='size-selector'
                value={chosenSize}
                onChange={handleSizeChange}>
                {productDetail.sizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </label>

            <label className='label-style'>
              Choose color
              <select
                className='color-selector'
                value={chosenColor}
                onChange={handleColorChange}>
                {productDetail.colors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </label>

            <p>
              <span className='product-description-header'>
           
                Product description: {<br />}
              </span>
              <span className='product-description'>
          
                {productDetail.description}
              </span>
            </p>

            <button
              className='btn-to-basket'
              onClick={(e) =>
                dispatch({
                  type: 'addItem',
                  productId: productDetail.id,
                  amount: 1,
                  color: chosenColor,
                  size: chosenSize,
                  price: productDetail.price,
                })
              }>
              Add to basket
            </button>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
