import { Size, Color } from "../Products/Product"

export interface IOrderItem {
    productId: string
    productAmount: number
    amountPrice: number
    size: Size
    color: Color
}

export interface IDeliveryAddress {
    recepientName: string,
    streetName: string,
    streetNo: string,
    postcode: number,
    city: string
    country: string
}

export interface IOrder {
    orderNo: number
    orderDate: string
    orderItems: IOrderItem[],
    totalOrderItemsNo: number,
    totalOrderPrice: number,
    paid: boolean
    deliveryAdress: IDeliveryAddress


}
/* 
export interface IOrderDetails {
    orderItems: IOrderItem[],
    totalOrderItemsNo: number,
    totalOrderPrice: number,
    deliveryAdress: IDeliveryAddress

} */

export interface IOrderList {
    orders: IOrder[]
}