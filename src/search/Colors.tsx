import { Container } from "react-bootstrap";
import { useSearchCriteriaProvider } from "./SearchCriteriaContext";
import { colorList } from "../Products/Product";
import Form from "react-bootstrap/Form";
import React from "react";

export default function Colors() {
  const [searchCriteria, dispatch] = useSearchCriteriaProvider();
  function handleCheck(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      dispatch({ type: "addColor", color: event.target.name });
    } else dispatch({ type: "removeColor", color: event.target.name });
  }
  return (
    <Container>
      <div>Colors </div>
      {colorList.map((e, index) => (
        <div key={index}>
          <input
            checked={searchCriteria.colors.find((s) => s === e) ? true : false}
            name={e}
            type="checkbox"
            id={index.toString()}
            onChange={handleCheck}
          />
          <label htmlFor={index.toString()}>{e}</label>
        </div>
      ))}
    </Container>
  );
}

// how do i make a function that will filter the products based on the search criteria?

// function filterProducts() {
//   let filteredProducts = products.filter((product) => {
//     if (searchCriteria.colors.length > 0) {
//       return product.colors.includes(searchCriteria.colors);
//     }
//   });
//   return filteredProducts;
// }
