import { Color, IBrand, IProduct, Size } from "../Products/Product";
import { ProductList } from "../Products/ProductList";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Route, Routes } from "react-router-dom";
import { ProductDetails } from "../Products/ProductDetails";


export default function App() {
    return (

        <Container>
            <Row>
                <Col sm={10}> <h1 style={{ textAlign: 'center' }}> TShirt </h1> </Col>
                <Col sm={1}> <button> LogIn </button></Col>
                <Col sm={1}> <button> Basket </button></Col>
            </Row>

            <Row>
                <Container>
                   <Routes> 
                     <Route path='/' element={
                        <Container>
                            <Col sm={4}> Search Filter </Col>
                            <Col sm={8}>  <ProductList /> </Col>
                        </Container>
                    } />
                    <Route path='/product/:id' element={
                        <Container>
                            <Col sm={8}>  <ProductDetails /> </Col>
                        </Container>
                    } />
                    </Routes>
                </Container>
            </Row>

            <Row>
                <Col sm={10}> <h1 style={{ textAlign: 'center' }}> Footer </h1> </Col>
            </Row>
        </Container>



    )
}
