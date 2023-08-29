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
  return {
    searchCriteria: newCriteria,
    filteredProducts: newFilteredProducts,
  };
}

const filteredProductsContext =
  createContext<IFilteredProducts>(notFilteredProducts);

const DispatchContext = createContext<React.Dispatch<SearchCriteriaAction>>(
  null as unknown as React.Dispatch<SearchCriteriaAction>
);
export default function SearchCriteriaProvider({
  children,
}: React.PropsWithChildren<unknown>) {
  const [filteredProductState, dispatchFilteredProducts] = useReducer(
    filteredProductsReducer,
    notFilteredProducts
  );
  return (
    <filteredProductsContext.Provider value={filteredProductState}>
      <DispatchContext.Provider value={dispatchFilteredProducts}>
        {children}
      </DispatchContext.Provider>
    </filteredProductsContext.Provider>
  );
}
export function useSearchCriteriaProvider(): [
  IFilteredProducts,
  React.Dispatch<SearchCriteriaAction>
] {
  return [useContext(filteredProductsContext), useContext(DispatchContext)];
}
