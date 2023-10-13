import { Card } from "react-bootstrap"
import CardHeader from "react-bootstrap/esm/CardHeader"
import { IBasket, IBasketItem } from "../basket/basketStructure"
import { getProductByID } from "../Products/ProductListContext"


export interface CheckoutBasketProps {
    basket: IBasket
    deliveryPrice:number
    totalVAT:number
}

export function CheckoutBasket(props: CheckoutBasketProps) {
    return (
        <>
            {
                props.basket.items.map(e => <ItemDetails item={e} />)
            }
            <br />
            <p> Subtotal: {props.basket.totalPrice} EUR </p> <br/>
            <p> Delivery: {props.deliveryPrice} EUR</p> <br/> 
            <p> Total with VAT: {props.totalVAT} EUR </p> <br/>
            
        </>
    )
}


interface itemDetailsProps {
    item: IBasketItem
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


export function ThankYou(props: CheckoutBasketProps) {
    return (
        <>
            {
                props.basket.items.map(e => <ItemDetails item={e} />)
            }
            <br />
            
        </>
    )
}