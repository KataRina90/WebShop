export interface BasketItem {
    productId:string
    productAmount:number
    price: number
}
export interface IBasket{
    items:BasketItem[]
    totalItemsNo: number // total number of all items in the basket 
    totalPrice: number  // total price for all items in the basket
}