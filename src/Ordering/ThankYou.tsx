import { CardGroup, Col, Row } from "react-bootstrap";
import { useBasketProvider } from "../basket/basketContext";
import { BasketItem } from "../basket/BasketItem";
import { Checkout } from "./Checkout";
export function ThankYou() {
const [currentBasket, dispatch] = useBasketProvider()
    return (
        <Row>
            <Col>
                <h1> Thanks for shopping with us! </h1>
                <p> You will soon receive an email with your order details and estimated delivery!</p>
                <h3> Total with VAT: {currentBasket.totalPrice} EUR </h3>
                <CardGroup>
                    {currentBasket.items.map(e => <BasketItem item={e} />)
                
                    }

                </CardGroup>
            </Col>



        </Row>)
}