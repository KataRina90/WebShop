import { useContext } from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useNavigate } from "react-router-dom";
import { useBasketProvider } from "./basketContext";
import { BasketItem } from "./BasketItem";

export function BasketComponent() {
    const navigate = useNavigate();
    /*    function showDetails ()  */
    const [currentBasket,dispatch] = useBasketProvider()
    return (
        <Row>
            <Col sm={8}>
                {currentBasket.items.length === 0 ?
                    <h1>No Items</h1>
                    :
                    <CardGroup>

                        {currentBasket.items.map(e => <BasketItem item={e} />)
                        }
                
                    </CardGroup>
                }

            </Col>
            <Col sm={4}>
                <Card>
                    <CardHeader> Total </CardHeader>
                    <Card.Body>
                        <Card.Text>
                            <p> Amount: {currentBasket.totalItemsNo} </p>
                            <p> Subtotal: {currentBasket.totalPrice} </p>
                            <p> Delivery: {0} </p>
                            <p> Total with VAT: {currentBasket.totalPrice}  </p>
                        </Card.Text>
                        <button> CHECKOUT </button>
                    </Card.Body>


                </Card>
            </Col>
        </Row>
    )
}