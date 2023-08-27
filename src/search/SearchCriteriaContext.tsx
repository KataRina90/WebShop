import { createContext, useReducer } from "react";
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

function getDispatchContext(f: React.Dispatch<SearchCriteriaAction>) {
  return createContext<React.Dispatch<SearchCriteriaAction>>(f);
}
export default function SearchCriteriaProvider({
  children,
}: React.PropsWithChildren<any>) {
  const [searchCriteriaState, dispatchCriteriaFunction] = useReducer(
    searchCriteriaReducer,
    emptySearchCriteria
  );
  const ContextDispatch = getDispatchContext(dispatchCriteriaFunction);
  return (
    <searchCriteriaContext.Provider value={searchCriteriaState}>
      <ContextDispatch.Provider value={dispatchCriteriaFunction}>
        {children}
      </ContextDispatch.Provider>
    </searchCriteriaContext.Provider>
  );
}
