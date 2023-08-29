import Colors from "./Colors";
import PriceRange from "./PriceRange";
import FilteredProductProvider from "./FilteredProductContext";
import Sizes from "./Sizes";

export default function SearchCriteria() {
  return (
    <FilteredProductProvider>
      <div> Search Criteria</div>
      <PriceRange />
      <Colors />
      <Sizes />
      <button>Search</button>
    </FilteredProductProvider>
  );
}
