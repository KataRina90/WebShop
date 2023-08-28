import Colors from "./Colors";
import PriceRange from "./PriceRange";
import SearchCriteriaProvider from "./SearchCriteriaContext";

export default function SearchCriteria() {
  return (
    <SearchCriteriaProvider>
      <div> Search Criteria</div>
      <PriceRange />
      <Colors />
      <button>Search</button>
    </SearchCriteriaProvider>
  );
}
