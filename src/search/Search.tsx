import Colors from "./Colors";
import PriceRange from "./PriceRange";

export default function SearchCriteria() {
  const colorOptions = ["Red", "Blue", "Green", "Yellow", "Black", "White"];

  return (
    <>
      <div> Search Criteria</div>
      <PriceRange from={0} to={0} />
      <Colors colors={colorOptions} />
      <button>Search</button>
    </>
  );
}
