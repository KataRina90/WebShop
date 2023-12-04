import { Accordion, Container } from "react-bootstrap";
import { useFilterProductProvider } from "../FilteredProductContext";
import { colorList } from "../../Products/Product";

export default function Colors() {
  const [filteredProducts, dispatch] = useFilterProductProvider();
  function handleCheck(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      dispatch({ type: "addColor", color: event.target.name });
    } else dispatch({ type: "removeColor", color: event.target.name });
  }

  return (
    <Accordion className="accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Select color</Accordion.Header>
        <Accordion.Body>
        {colorList.map((e, index) => (
        <div key={index}>
          <input
            checked={
              filteredProducts.searchCriteria.colors.find((s) => s === e)
                ? true
                : false
            }
            name={e}
            type="checkbox"
            id={index.toString()}
            onChange={handleCheck}
          />
          <label htmlFor={index.toString()}>{e}</label>
        </div>
      ))}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
          }

/*   return (
    <Container>
      <div>Colors </div>
      {colorList.map((e, index) => (
        <div key={index}>
          <input
            checked={
              filteredProducts.searchCriteria.colors.find((s) => s === e)
                ? true
                : false
            }
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
 */