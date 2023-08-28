import { Size, Color, SizeList, ColorList } from "../Products/Product";

export interface ISearchCriteria {
  priceRange?: {
    from?: number;
    to?: number;
  };
  sizes: SizeList;
  colors: ColorList;
}
