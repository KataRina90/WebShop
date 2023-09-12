import { Col, Row } from "react-bootstrap";
import { useBasketProvider } from "../basket/basketContext";
import { UserDetails } from "./Form";
export function Checkout() {
    const [basket, dispatch] = useBasketProvider()
    return (
        <Row>
            <Col sm={8}>
            <h1> thanks for shopping </h1>
            </Col>
            <Col sm={4}>

            </Col>
        </Row>)
}