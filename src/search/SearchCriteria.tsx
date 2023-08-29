import { SizeList, ColorList } from "../Products/Product";
import { IProduct } from "../Products/Product";
export interface ISearchCriteria {
  priceRange?: {
    from?: number;
    to?: number;
  };
  sizes: SizeList;
  colors: ColorList;
}

export function getFilteredProducts(
  criteria: ISearchCriteria,
  products: IProduct[]
) {
  function isSubArray(subArray: string[], superArray: string[]) {
    return subArray.every((e) => superArray.includes(e));
  }
  const filterFunction = (p: IProduct) => {
    // check for the lower range
    if (criteria.priceRange?.from && criteria.priceRange.from >= p.price)
      return false;
    // check for the upper range
    if (criteria.priceRange?.to && criteria.priceRange.to <= p.price)
      return true;
    // check sizes
    if (!isSubArray(criteria.sizes, p.sizes)) return false;
    // check colors
    if (!isSubArray(criteria.colors, p.colors)) return false;
  };
  return products.filter(filterFunction);
}
