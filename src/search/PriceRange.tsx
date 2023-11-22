import { Container } from "react-bootstrap";
import { useFilterProductProvider } from "./FilteredProductContext";
import { useState } from "react";

export default function PriceRange() {
  const [filteredProducts, dispatch] = useFilterProductProvider();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <div className="accordion">
        <div className="accordion-header" onClick={()=> setIsOpen(!isOpen)}> Select price </div>
        <div className="accordion-indicator">
          {isOpen? '∆':'∇'} </div> 
       {/* conditional rendering */}
        {isOpen && (
        <><div className="accordion-item">
            <label htmlFor="from" className="label-price">from
            <input className="input-price"
              min={0}
              onChange={(e) => dispatch({
                type: "rangeFrom",
                from: Number(e.target.value),
              })}
              value={filteredProducts.searchCriteria.priceRange?.from}
              name="from"
              type="number" />
              </label>
          
          <label htmlFor="to" className="label-price">to
          <input className="input-price"
              min={0}
              onChange={(e) => dispatch({
                type: "rangeTo",
                to: Number(e.target.value),
              })}
              value={filteredProducts.searchCriteria.priceRange?.to}
              name="to"
              type="number" /> 
               </label>
              </div>
              </>
             
        )}
      </div>
   
        
    
    </Container>
  );
}

// const mainArray = [1, 2, 3, 4, 5];
// const subArray = [2, 4];

// const isSubArrayContained = subArray.every(elem => mainArray.includes(elem));

// console.log(isSubArrayContained); // true
