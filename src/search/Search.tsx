import Colors from "./Colors";
import PriceRange from "./PriceRange";

export default function SearchCriteria() {
  return (
    <>
      <div> Search Criteria</div>
      <PriceRange from={0} to={0} />
      <Colors />
    </>
  );
}
