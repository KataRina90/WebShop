import { IProduct } from './Product';
export interface ProductItemProps {
    item:IProduct
}
export function ProductItem(props:ProductItemProps) {
    return (
        <div>
            <img src={props.item.imageURL} />
            <p> {props.item.name} </p>
            <p> {props.item.sizes.map(e => <span>{e}</span>)} </p>
            <p> {props.item.colors.map(e => <span> {e}</span>)}</p>
        </div>
    )
}