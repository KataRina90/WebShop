import { Size, Color } from "../Products/Product";

export interface iSearchCriteria {
  priceRange?: {
    from?: number;
    to?: number;
  };
  sizes: Size[];
  colors: Color[];
}
