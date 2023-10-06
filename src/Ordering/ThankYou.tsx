import { CardGroup, Col, Row } from "react-bootstrap";
import { OrderProvider, useOrderProvider } from "./orderContext";
import { OrderDetails, OrderDetailsThankYou } from "./OrderDetails";
export function ThankYou() {
const [allOrders, dispatchOrder] = useOrderProvider()
const currentOrder=allOrders.orders.length>0?allOrders.orders[allOrders.orders.length-1]:null
    return (
        <Row>
            <Col>
                <h1> Thanks for shopping with us! </h1>
                <p> You will soon receive an email with your order details and estimated delivery!</p>

                <CardGroup>
                {
                 currentOrder !== null &&   < OrderDetailsThankYou orderdetails={currentOrder} />
                
                    }

                </CardGroup>
                <h2> Total with VAT: {currentOrder?.totalOrderPrice} EUR </h2>
            </Col>



        </Row>)
}