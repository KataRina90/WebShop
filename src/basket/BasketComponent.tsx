
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useNavigate } from "react-router-dom";
import { useBasketProvider } from "./basketContext";
import { BasketItem } from "./BasketItem";
import { Link } from "react-router-dom";
import { IBasket } from "./basketStructure";
import { useOrderProvider } from "../Ordering/orderContext";

export function BasketComponent() {
    const navigate = useNavigate();
    /*    function showDetails ()  */
    const [currentBasket, dispatch] = useBasketProvider()
    const [currentOrder,dispatchOrder]=useOrderProvider()



    function clear (items:IBasket){

    }
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
                        <button onClick={e=>
                        {
                            dispatchOrder({
                                type:"createOrder",
                                basket:currentBasket,
                                deliveryAdress:{
                                    city:"",
                                    country:"",
                                    postcode:0,
                                    recepientName:"",
                                    streetName:"",
                                    streetNo:""
                                }
                            })
                        navigate("/checkout")
                    }}>
                             CHECKOUT
                        </button>
                        <button onClick={e=>{
                            dispatch({
                                type:"clearItem"
                            })
                        }
                    }> Clear basket </button>
                    </Card.Body>
                   


                </Card>
            </Col>
        </Row>
    )
}

