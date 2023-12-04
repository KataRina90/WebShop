import Colors from "./Colors/Colors";
import PriceRange from "./PriceRange/PriceRange";
import Sizes from "./Sizes/Sizes";

export default function SearchCriteria() {
  return (
    <div className="accordion-div">
      <PriceRange />
      <Colors />
      <Sizes />
    </div>

  );
}
