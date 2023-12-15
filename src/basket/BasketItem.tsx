import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useNavigate } from 'react-router-dom';
import { IBasketItem } from './basketStructure';
import { getProductByID } from '../Products/ProductListContext';
import { useBasketProvider } from './basketContext';
import './BasketItem.css'

export interface BasketItemProps {
    item: IBasketItem
}
export function BasketItem(props: BasketItemProps) {
    const navigate = useNavigate();
    function showDetails(id: string) {
        navigate('/product/' + id) //go to route for product detail once ready
    }

    const product = getProductByID(props.item.productId) //kako stizem do props samog proizvoda koji ima jos dodatne props kao npr. brand? Tako sto sam funkciji dodelila return tip IProduct koji to sadrzi
    const [basket, dispatch] = useBasketProvider()


    if (!product) {
        return (
            <h1> Product not found </h1>
        )
    }
    else
        return (
            <Card className='card-style'>
                <Card.Img variant='top' src={product.imageURL} onClick={e => showDetails(props.item.productId)} />
                <CardHeader className='card-header'> {product.brand.brandName}</CardHeader>
                <Card.Body>
                    <Card.Title className='card-title'> {product.name}</Card.Title>
                    <Card.Text>
                        <p className='card-text-size'> Size: {props.item.size}</p>
                        <p className='card-text-colors'> Color: {props.item.color}</p>
                        <p> Quantity:
                            <input
                                className='input-quantity'
                                type={'number'}
                                min='0'
                                value={props.item.productAmount}
                                onChange={e => {
                                    dispatch({
                                        type: 'editItem',
                                        amount: parseInt(e.target.value),
                                        price: product.price * (parseInt(e.target.value) ? parseInt(e.target.value) : 0),
                                        productId: props.item.productId, // product.productID moze posto je isto
                                        size: props.item.size
                                    })
                                }}
                            >
                            </input> <br/>
                            Price: {props.item.amountPrice} € </p>
                    </Card.Text>
                </Card.Body>

                <button className='remove-button'
                onClick={e => {
                    dispatch({
                        type: 'removeItem',
                        productId: product.id
                    })
                }}> Remove Item</button>

            </Card>
        )
}