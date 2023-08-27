import { ProductItem } from './ProductItem';
import {CardGroup} from 'react-bootstrap';
import { useContext } from 'react';
import { ProductListContext, products } from './ProductListContext';
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
 const list=useContext(ProductListContext)
    return (
        <CardGroup>
        {list.map (e=> <ProductItem item={e}/> )
        
        }
        </CardGroup>
    )
}