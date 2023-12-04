import { IProduct } from "./Product";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useNavigate } from "react-router-dom";

export interface ProductItemProps {
  item: IProduct;
}
export function ProductItem(props: ProductItemProps) {
  const navigate = useNavigate();
  function showDetails(id: string) {
    navigate("/product/" + id); //go to route for product detail once ready
  }
  return (
    <Card
    font-weight="bold" //zasto ne radi?
    border="light"
    style={{ width: "18rem", cursor: "pointer", padding:"2px", margin:"10px"}}
    onClick={() => showDetails(props.item.id)}
    >
      <Card.Img
        variant="top"
        src={props.item.imageURL}
        width="500"
        height="250"
      />
      <CardHeader> {props.item.brand.brandName}</CardHeader>
      <Card.Body>
        <Card.Title className="card-title"> {props.item.name}</Card.Title>
        <Card.Text>
          {props.item.sizes.map((e, index) => (
            <span key={index}> {e} </span>
          ))}
        </Card.Text>
        <Card.Text>
          {props.item.colors.map((e, index) => (
            <span key={index}> {e} </span>
          ))}
        </Card.Text>
        <Card.Text> {props.item.price} EUR</Card.Text>
      </Card.Body>
    </Card>
  );
}
