import { Container, Form } from "react-bootstrap";
import { useSearchCriteriaProvider } from "./SearchCriteriaContext";

export default function PriceRange() {
  const [searchCriteria, dispatch] = useSearchCriteriaProvider();

  return (
    <Container>
      <div>Price Range</div>
      <div>
        <label htmlFor="from">from</label>
        <input
          onChange={(e) =>
            dispatch({
              type: "rangeFrom",
              from: Number(e.target.value),
            })
          }
          value={searchCriteria.priceRange?.from}
          name="from"
          type="number"
        />
      </div>
      <div>
        <label htmlFor="to">to</label>
        <input
          onChange={(e) =>
            dispatch({
              type: "rangeTo",
              to: Number(e.target.value),
            })
          }
          value={searchCriteria.priceRange?.to}
          name="to"
          type="number"
        />
      </div>
    </Container>
  );
}
