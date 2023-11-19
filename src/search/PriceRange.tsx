import { Container } from "react-bootstrap";
import { useFilterProductProvider } from "./FilteredProductContext";

export default function PriceRange() {
  const [filteredProducts, dispatch] = useFilterProductProvider();

  return (
    <Container>
      <div className="accordion-header"> Price </div>
      <div className="accordion-item">
        <label htmlFor="from">from</label>
        <input
          min={0}
          onChange={(e) =>
            dispatch({
              type: "rangeFrom",
              from: Number(e.target.value),
            })
          }
          value={filteredProducts.searchCriteria.priceRange?.from}
          name="from"
          type="number"
        />
      </div>
      <div>
        <label htmlFor="to">to</label>
        <input
          min={0}
          onChange={(e) =>
            dispatch({
              type: "rangeTo",
              to: Number(e.target.value),
            })
          }
          value={filteredProducts.searchCriteria.priceRange?.to}
          name="to"
          type="number"
        />
      </div>
    </Container>
  );
}

// const mainArray = [1, 2, 3, 4, 5];
// const subArray = [2, 4];

// const isSubArrayContained = subArray.every(elem => mainArray.includes(elem));

// console.log(isSubArrayContained); // true
