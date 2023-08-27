import { createContext, useContext, useReducer } from "react";
import { iSearchCriteria } from "./SearchCriteria";
import {
  SearchCriteriaAction,
  searchCriteriaReducer,
} from "./SearchCriteriaReducers";

const emptySearchCriteria: iSearchCriteria = {
  colors: [],
  sizes: [],
};
const searchCriteriaContext =
  createContext<iSearchCriteria>(emptySearchCriteria);

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
export function useSearchCriteriaProvider() {
  return [useContext(searchCriteriaContext), useContext(DispatchContext)];
}
