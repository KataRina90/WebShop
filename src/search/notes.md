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

function filterProducts(criteria: ISearchCriteria, products: IProduct[]) {
const filterFunction = (p: IProduct) => {
if (criteria.priceRange?.from && criteria.priceRange.from >= p.price)
return false;
if (criteria.priceRange?.to && criteria.priceRange.to <= p.price)
return false;

    // Check sizes
    const sizesIncluded = criteria.sizes.every(size => p.sizes.includes(size));
    if (!sizesIncluded) return false;

    // Check colors
    const colorsIncluded = criteria.colors.every(color => p.colors.includes(color));
    if (!colorsIncluded) return false;

    return true;

};

const filteredProducts = products.filter(filterFunction);
return filteredProducts;
}
