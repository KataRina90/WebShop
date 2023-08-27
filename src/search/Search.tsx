import Colors from "./Colors";
import PriceRange from "./PriceRange";
import SearchCriteriaProvider from "./SearchCriteriaContext";

export default function SearchCriteria() {
  const colorOptions = ["Red", "Blue", "Green", "Yellow", "Black", "White"];

  return (
    <SearchCriteriaProvider>
      <div> Search Criteria</div>
      <PriceRange from={0} to={0} />
      <Colors colors={colorOptions} />
      <button>Search</button>
    </SearchCriteriaProvider>
  );
}
