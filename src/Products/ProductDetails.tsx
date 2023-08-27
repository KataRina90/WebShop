import { useContext } from "react";
import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useParams } from "react-router-dom"
import { Color, IProduct, Size } from "./Product";
import { ProductListContext } from "./ProductListContext";

export function ProductDetails() {
    let { id } = useParams(); // vraca id zadnje putanje na koju je stigao u tom trenutku . inace useParams vraca sve parametre iz putanje kao properties jednog objekta. 
    const list = useContext(ProductListContext)
    const productDetail = list.find(e => e.id === id) as IProduct //uvek tretiraj kao IProduct, u suprotnom moze da bude undefined
    return (
        <Card style={{ width: '18rem', cursor: "pointer" }}>
        <Card.Img variant='top' src={productDetail.imageURL} width='300' height='300' />
        <CardHeader> {productDetail.brand.brandName}</CardHeader>
        <Card.Body>
            <Card.Title> {productDetail.name}</Card.Title>
            <Card.Text>
                {productDetail.sizes.map(e => <span> {Size[e]}</span>)}
            </Card.Text>
            <Card.Text>
                {productDetail.colors.map(e => <span> {Color[e]}</span>)}
            </Card.Text>
            <Card.Text>
                Price: {productDetail.price} EUR
            </Card.Text>
        </Card.Body>
    </Card>
    )
}