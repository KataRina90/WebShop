import { Size, Color } from "../Products/Product";

export interface ISearchCriteria {
  priceRange?: {
    from?: number;
    to?: number;
  };
  sizes: Size[];
  colors: Color[];
}
