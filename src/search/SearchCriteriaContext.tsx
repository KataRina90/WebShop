import { createContext, useContext, useReducer } from "react";
import { ISearchCriteria } from "./SearchCriteria";
import {
  SearchCriteriaAction,
  searchCriteriaReducer,
} from "./SearchCriteriaReducers";

const emptySearchCriteria: ISearchCriteria = {
  colors: [],
  sizes: [],
};
const searchCriteriaContext =
  createContext<ISearchCriteria>(emptySearchCriteria);

const DispatchContext = createContext<React.Dispatch<SearchCriteriaAction>>(
  null as unknown as React.Dispatch<SearchCriteriaAction>
);
export default function SearchCriteriaProvider({
  children,
}: React.PropsWithChildren<unknown>) {
  const [searchCriteriaState, dispatchCriteriaFunction] = useReducer(
    searchCriteriaReducer,
    emptySearchCriteria
  );
  return (
    <searchCriteriaContext.Provider value={searchCriteriaState}>
      <DispatchContext.Provider value={dispatchCriteriaFunction}>
        {children}
      </DispatchContext.Provider>
    </searchCriteriaContext.Provider>
  );
}
export function useSearchCriteriaProvider(): [
  ISearchCriteria,
  React.Dispatch<SearchCriteriaAction>
] {
  return [useContext(searchCriteriaContext), useContext(DispatchContext)];
}
