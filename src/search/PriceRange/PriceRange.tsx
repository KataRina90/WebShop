import { Accordion, Container } from "react-bootstrap";
import { useFilterProductProvider } from "../FilteredProductContext";
import { useState } from "react";
import "./PriceRange.css";

export default function PriceRange() {
  const [filteredProducts, dispatch] = useFilterProductProvider();
  const [isOpen, setIsOpen] = useState(false);

  /*   return (
  
  
  
  
      
      <Container>
        <div className="accordion">
          <div className="accordion-header" onClick={()=> setIsOpen(!isOpen)}> Select price </div>
          <div className="accordion-indicator">
            {isOpen? '∆':'∇'} </div> 
          {isOpen && (
          <><div className="accordion-item">
              <label htmlFor="from" className="label-price">from
              </label>
              <input className="input-price"
                min={0}
                onChange={(e) => dispatch({
                  type: "rangeFrom",
                  from: Number(e.target.value),
                })}
                value={filteredProducts.searchCriteria.priceRange?.from}
                name="from"
                type="number" />
                
            
            <label htmlFor="to" className="label-price">to  </label>
            <input className="input-price"
                min={0}
                onChange={(e) => dispatch({
                  type: "rangeTo",
                  to: Number(e.target.value),
                })}
                value={filteredProducts.searchCriteria.priceRange?.to}
                name="to"
                type="number" /> 
                
                </div>
                </>
               
          )}
        </div>
     
          
      
      </Container>
    ); */



  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Select price range</Accordion.Header>
        <Accordion.Body>
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

          <label htmlFor="to" className="label-price"> to </label>
          <input className="input-price"
            min={0}
            onChange={(e) => dispatch({
              type: "rangeTo",
              to: Number(e.target.value),
            })}
            value={filteredProducts.searchCriteria.priceRange?.to}
            name="to"
            type="number" />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );

}

// const mainArray = [1, 2, 3, 4, 5];
// const subArray = [2, 4];

// const isSubArrayContained = subArray.every(elem => mainArray.includes(elem));

// console.log(isSubArrayContained); // true
