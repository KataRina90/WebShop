import { ProductItem } from "./ProductItem";
import { CardGroup } from "react-bootstrap";
import { useContext } from "react";
import { useSearchCriteriaProvider } from "../search/FilteredProductContext";
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
  const [{ filteredProducts }] = useSearchCriteriaProvider();

  return (
    <CardGroup>
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} item={product} />
      ))}
    </CardGroup>
  );
}
