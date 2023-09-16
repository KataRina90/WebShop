import { IBasket } from "../basket/basketStructure";

export interface IOrder {
    orderItems: IBasket,
    totalOrderItemsNo:number,
    totalOrderPrice: number
    orderNo: number
}

export interface IOrderList {
    orders:IOrder[]
}