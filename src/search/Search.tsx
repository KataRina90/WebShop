import Colors from "./Colors";
import PriceRange from "./PriceRange/PriceRange";
import Sizes from "./Sizes";

export default function SearchCriteria() {
  return (
    <div>
      <div> Search Criteria</div>
      <PriceRange />
      <Colors />
      <Sizes />
    </div>

  );
}
