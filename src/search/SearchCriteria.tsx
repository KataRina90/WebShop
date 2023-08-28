import { Size, Color, SizeList, ColorList } from "../Products/Product";
import { IProduct } from "../Products/Product";
export interface ISearchCriteria {
  priceRange?: {
    from?: number;
    to?: number;
  };
  sizes: SizeList;
  colors: ColorList;
}

const filterFunction = (p: IProduct) => {
  return true;
};

function filterProducts(criteria: ISearchCriteria, products: IProduct[]) {
  const filteredProducts = products.filter(filterFunction);
  return filterProducts;
}
