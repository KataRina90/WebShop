import { Size, Color } from "../Products/Product"

export interface IBasketItem {
    productId:string
    productAmount:number
    price: number
    size: Size
    color: Color
}
export interface IBasket{
    items:IBasketItem[]
    totalItemsNo: number // total number of all items in the basket 
    totalPrice: number  // total price for all items in the basket
}