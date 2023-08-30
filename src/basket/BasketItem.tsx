import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useNavigate } from 'react-router-dom';
import { IBasketItem } from './basketStructure';
import { getProductByID } from '../Products/ProductListContext';
import { useBasketProvider } from './basketContext';

export interface BasketItemProps {
    item: IBasketItem
}
export function BasketItem(props: BasketItemProps) {
    const navigate = useNavigate();
    function showDetails(id: string) {
        navigate('/product/' + id) //go to route for product detail once ready
    }

    const product = getProductByID(props.item.productId)
    const [basket,dispatch]=useBasketProvider()
    if (!product) {
        return (
        <h1> Product not found </h1>
        )
    }
    else
        return (
            <Card style={{ width: '18rem', cursor: "pointer" }}>
                <Card.Img variant='top' src={product.imageURL} width='300' height='300'  onClick={e => showDetails(props.item.productId)}/>
                <CardHeader> {product.brand.brandName}</CardHeader>
                <Card.Body>
                    <Card.Title> {product.name}</Card.Title>
                    <Card.Text>
                        <p> Size: {props.item.size}</p>
                    </Card.Text>
                    <Card.Text>
                        <p> Color: {props.item.color}</p>
                    </Card.Text>
                    <Card.Text>
                        <input type={'number'} min='0'
                         value={props.item.productAmount}
                        onChange={e=>{dispatch({
                            type:'editItem',
                            amount: parseInt(e.target.value),
                            price: product.price*(parseInt(e.target.value)?parseInt(e.target.value):0),
                            productId: props.item.productId, // product.productID moze posto je isto
                            size: props.item.size
                        })}}
                        > 
    
                        </input>
                        Price: {props.item.price} EUR
                    </Card.Text>

                </Card.Body>
                <button onClick={e=>{dispatch({
                        type:'removeItem',
                        productId:product.id
                    })}}> Remove </button>

            </Card>
        )
}