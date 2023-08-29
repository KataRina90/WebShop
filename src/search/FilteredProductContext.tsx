import { createContext, useContext, useReducer } from "react";
import { ISearchCriteria, getFilteredProducts } from "./SearchCriteria";
import {
  SearchCriteriaAction,
  searchCriteriaReducer,
} from "./SearchCriteriaReducers";
import { IProduct } from "../Products/Product";
import { products } from "../Products/ProductListContext";

export interface IFilteredProducts {
  searchCriteria: ISearchCriteria;
  filteredProducts: IProduct[];
}

const notFilteredProducts: IFilteredProducts = {
  searchCriteria: {
    colors: [],
    sizes: [],
  },
  filteredProducts: products,
};

export function filteredProductsReducer(
  oldFilteredProducts: IFilteredProducts,
  action: SearchCriteriaAction
): IFilteredProducts {
  const newCriteria = searchCriteriaReducer(
    oldFilteredProducts.searchCriteria,
    action
  );
  const newFilteredProducts = getFilteredProducts(newCriteria, products);
  return { searchCriteria: newCriteria, filteredProducts: newFilteredProducts };
}

const filteredProductsContext =
  createContext<IFilteredProducts>(notFilteredProducts);

const DispatchContext = createContext<React.Dispatch<SearchCriteriaAction>>(
  null as unknown as React.Dispatch<SearchCriteriaAction>
);
export default function FilteredProductProvider({
  children,
}: React.PropsWithChildren<unknown>) {
  const [newFilteredProductState, dispatchFilteredProducts] = useReducer(
    filteredProductsReducer,
    notFilteredProducts
  );
  return (
    <filteredProductsContext.Provider value={newFilteredProductState}>
      <DispatchContext.Provider value={dispatchFilteredProducts}>
        {children}
      </DispatchContext.Provider>
    </filteredProductsContext.Provider>
  );
}
export function useFilterProductProvider(): [
  IFilteredProducts,
  React.Dispatch<SearchCriteriaAction>
] {
  return [useContext(filteredProductsContext), useContext(DispatchContext)];
}
