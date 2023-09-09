import { Col, Row } from "react-bootstrap";
import { useBasketProvider } from "../basket/basketContext";
export function Checkout() {
    const [basket, dispatch] = useBasketProvider()
    return (
        <Row>
            <Col sm={8}>

            </Col>
            <Col sm={4}>

            </Col>
        </Row>)
}