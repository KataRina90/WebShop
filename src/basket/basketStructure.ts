import { Color } from "react-bootstrap/esm/types"
import { Size } from "../Products/Product"

export interface BasketItem {
    productId:string
    productAmount:number
    price: number
    size: Size
    color: Color
}
export interface IBasket{
    items:BasketItem[]
    totalItemsNo: number // total number of all items in the basket 
    totalPrice: number  // total price for all items in the basket
}