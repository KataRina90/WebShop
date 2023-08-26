import { IProduct } from './Product';
import { ProductItem } from './ProductItem';
export interface ProductListProps {
    list: Array <IProduct>
}
export function ProductList(props:ProductListProps) {
    return (
        <div>
        {props.list.map (e=> <ProductItem item={e}/> )
        
        }
        </div>
    )
}