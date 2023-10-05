import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { Link } from 'react-router-dom';
import { getProductByID } from '../Products/ProductListContext';
import { IOrder, IOrderDetails, IOrderItem } from './orderStructure';

export interface OrderDetailsProps {
    orderdetails: IOrder
}

export function OrderDetails(props: OrderDetailsProps) {
    return (
        <>
            {
                props.orderdetails.orderItems.map(e => <ItemDetails item={e} />)
            }
            <br />
            <p> Subtotal: {props.orderdetails.totalOrderPrice} EUR </p>
            <p> Delivery: {0} EUR</p>
            <p> Total with VAT: {props.orderdetails.totalOrderPrice} EUR </p>
            
        </>
    )
}

interface itemDetailsProps {
    item: IOrderItem
}

function ItemDetails(props: itemDetailsProps) {
    const product = getProductByID(props.item.productId)
    return (
        <Card style={{ width: '18rem', cursor: "pointer" }}>
            <Card.Img variant='top' src={product!.imageURL} width='300' height='300' />
            <CardHeader>
                <Card.Body>
                    <Card.Title>
                        {product!.name}
                        <Card.Text>
                            Size: {props.item.size} <br/>
                            Color: {props.item.color} <br/>
                            Amount: {props.item.productAmount} <br/>
                            Price: {props.item.amountPrice} EUR <br/>
                        </Card.Text>
                    </Card.Title>
                </Card.Body>

            </CardHeader>
        </Card>

    )
}

/* 
    return (
        <Card style={{ width: '18rem', cursor: "pointer" }}>
            <Card.Img variant='top' src={product!.imageURL} width='300' height='300' />
            <CardHeader>
                <Card.Body>
                    <Card.Title>
                        {product!.name}
                        <Card.Text>
                            Size: {props.orderdetails.size}
                            Color: {props.orderdetails.color}
                            Amount: {props.orderdetails.productAmount}
                            Price: {props.orderdetails.amountPrice} EUR
                        </Card.Text>
                    </Card.Title>
                </Card.Body>

            </CardHeader>
        </Card>

    ) */
