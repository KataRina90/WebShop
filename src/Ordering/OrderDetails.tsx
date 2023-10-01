import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { getProductByID } from '../Products/ProductListContext';
import { IOrderDetails, IOrderItem } from './orderStructure';



export function OrderDetails(props: IOrderItem) {
    const product = getProductByID(props.productId)
    return (
        <Card style={{ width: '18rem', cursor: "pointer" }}>
            <Card.Img variant='top' src={product!.imageURL} width='300' height='300' />
            <CardHeader>
                <Card.Body>
                    <Card.Title>
                        {product!.name}
                        <Card.Text>
                            Size: {props.size}
                            Color: {props.color}
                            Amount: {props.productAmount}
                            Price: {props.amountPrice} EUR
                        </Card.Text>
                    </Card.Title>
                </Card.Body>

            </CardHeader>
        </Card>

    )
}