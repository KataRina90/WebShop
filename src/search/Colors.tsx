import React from "react";
import { Container } from "react-bootstrap";
import { useState } from "react";

export interface ColorProps {
  colors: string;
}

export default function Colors(props: ColorProps) {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <Container>
      <div>
        <label htmlFor="color">Color</label>
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          name="color"
        >
          <option value="">All Colors</option>
        </select>
      </div>
    </Container>
  );
}
