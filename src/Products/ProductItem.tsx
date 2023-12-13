import { IProduct } from './Product';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { useNavigate } from 'react-router-dom';
import './CardProductItem.css';

export interface ProductItemProps {
  item: IProduct;
}
export function ProductItem(props: ProductItemProps) {
  const navigate = useNavigate();
  function showDetails(id: string) {
    navigate('/product/' + id); //go to route for product detail once ready
  }
  return (
    <Card className='card-style' onClick={() => showDetails(props.item.id)}>
      <Card.Img
        className='card-img'
        variant='top'
        src={props.item.imageURL}
        width={300}
      />
      <CardHeader className='card-header'>
        {' '}
        {props.item.brand.brandName}
      </CardHeader>
      <Card.Body>
        <Card.Title className='card-title'> {props.item.name}</Card.Title>
        <Card.Text className='card-text-sizes'>
          {props.item.sizes.map((e, index) => (
            <span key={index}> {e} </span>
          ))}
        </Card.Text>
        <Card.Text className='card-text-colors'>
          {props.item.colors.map((e, index) => (
            <span key={index}> {e} </span>
          ))}
        </Card.Text>
        <Card.Text className='card-text-price'> {props.item.price} €</Card.Text>
      </Card.Body>
    </Card>
  );
}
