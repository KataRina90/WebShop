import { ProductItem } from './ProductItem';
import { CardGroup, Col, Row } from 'react-bootstrap';
import { useFilterProductProvider } from '../search/FilteredProductContext';

/* export interface ProductListProps {
    list: Array <IProduct>
} */
/* export function ProductList(props:ProductListProps) {
    return (
        <CardGroup>
        {props.list.map (e=> <ProductItem item={e}/> )
        
        }
        </CardGroup>
    )
} */

export function ProductList() {
  const [{ filteredProducts }] = useFilterProductProvider();
  console.log(filteredProducts);

  return (
    <Row>
      {filteredProducts.map((product) => (
        <Col sm={6} md={3}>
          <ProductItem key={product.id} item={product} />
        </Col>
      ))}
    </Row>
  );
}
