import { Container } from "react-bootstrap";
import { useSearchCriteriaProvider } from "./SearchCriteriaContext";
import { colorList } from "../Products/Product";
import Form from "react-bootstrap/Form";

export default function Colors() {
  const [searchCriteria, dispatch] = useSearchCriteriaProvider();

  return (
    <Container>
      <form>
        {colorList.map((e, index) => (
          <form key={index}>
            <input name={e} value={e} type="checkbox" id={index.toString()} />
            <label htmlFor={index.toString()}>{e}</label>
          </form>
        ))}
      </form>
    </Container>
  );
}
