import { Container, Form } from "react-bootstrap";
import { useState } from "react";

export interface PriceRangeProps {
  from: number;
  to: number;
}
export default function PriceRange(props: PriceRangeProps) {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(Infinity);
  function searchHandler(event: Event) {
    event.preventDefault();
  }
  return (
    <Container>
      <Form onSubmit={searchHandler}>
        <div>Price Range</div>
        <div>
          <label htmlFor="from">from</label>
          <input
            onChange={(e) => setFrom(Number(e.target.value))}
            value={from}
            name="from"
            type="number"
          />
        </div>
        <div>
          <label htmlFor="to">to</label>
          <input
            onChange={(e) => setTo(Number(e.target.value))}
            value={to}
            name="to"
            type="number"
          />
        </div>
      </Form>
    </Container>
  );
}
