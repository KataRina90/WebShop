import { IProduct } from './Product';
import { ProductItem } from './ProductItem';
import {CardGroup} from 'react-bootstrap';
export interface ProductListProps {
    list: Array <IProduct>
}
export function ProductList(props:ProductListProps) {
    return (
        <CardGroup>
        {props.list.map (e=> <ProductItem item={e}/> )
        
        }
        </CardGroup>
    )
}