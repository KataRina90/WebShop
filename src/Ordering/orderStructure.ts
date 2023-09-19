import { Size, Color } from "../Products/Product"

interface IOrderItem {
    productId:string
    productAmount:number
    amountPrice: number
    size: Size
    color: Color
}

export interface IOrder {
    orderNo: number
    orderDate:Date
    orderItems: IOrderItem[], 
    totalOrderItemsNo:number,
    totalOrderPrice: number
   
}

export interface IOrderList {
    orders:IOrder[]
}