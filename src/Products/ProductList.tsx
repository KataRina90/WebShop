import { ProductItem } from "./ProductItem";
import { CardGroup } from "react-bootstrap";
import { useFilterProductProvider } from "../search/FilteredProductContext";
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
    <CardGroup>
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} item={product} />
      ))}
    </CardGroup>
  );
}
