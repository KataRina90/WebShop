import { Color, IProduct, Size } from './Product';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useNavigate } from 'react-router-dom';

function BasicExample() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
}

export default BasicExample;
export interface ProductItemProps {
    item: IProduct
}
export function ProductItem(props: ProductItemProps) {
    const navigate=useNavigate();
    function showDetails(id:string) {
        navigate ('/product/'+id) //go to route for product detail once ready
    }
    return (
        <Card style={{ width: '18rem', cursor: "pointer" }} onClick={e=> showDetails(props.item.id)}>
            <Card.Img variant='top' src={props.item.imageURL} width='300' height='300' />
            <CardHeader> {props.item.brand.brandName}</CardHeader>
            <Card.Body>
                <Card.Title> {props.item.name}</Card.Title>
                <Card.Text>
                    {props.item.sizes.map(e => <span> {Size[e]}</span>)}
                </Card.Text>
                <Card.Text>
                    {props.item.colors.map(e => <span> {Color[e]}</span>)}
                </Card.Text>
                <Card.Text>
                    Price: {props.item.price} EUR
                </Card.Text>
            </Card.Body>
        </Card>
    )
}