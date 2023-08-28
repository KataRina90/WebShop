import Colors from "./Colors";
import PriceRange from "./PriceRange";
import SearchCriteriaProvider from "./SearchCriteriaContext";
import Sizes from "./Sizes";

export default function SearchCriteria() {
  return (
    <SearchCriteriaProvider>
      <div> Search Criteria</div>
      <PriceRange />
      <Colors />
      <Sizes />
      <button>Search</button>
    </SearchCriteriaProvider>
  );
}
