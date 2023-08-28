import { useState } from "react";
import { Container } from "react-bootstrap";

export interface SizesProps {
  sizes: string[];
}

export default function Sizes(props: SizesProps) {
  const [selectedSize, setSelectedSize] = useState([]);
  return (
    <Container>
      <div></div>
    </Container>
  );
}
