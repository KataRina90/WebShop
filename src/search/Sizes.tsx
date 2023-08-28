import { useState } from "react";
import { Container } from "react-bootstrap";
import { SizeList, sizeList } from "../Products/Product";
import { useSearchCriteriaProvider } from "./SearchCriteriaContext";

export interface SizesProps {
  sizes: string[];
}

export default function Sizes() {
  const [searchCriteria, dispatch] = useSearchCriteriaProvider();
  function handleCheck(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      dispatch({ type: "addSize", size: event.target.name });
    } else dispatch({ type: "removeSize", size: event.target.name });
  }

  return (
    <Container>
      <div>Sizes</div>
      {sizeList.map((e, index) => (
        <div key={index}>
          <input
            checked={searchCriteria.sizes.find((s) => s === e) ? true : false}
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
