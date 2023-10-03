import { IBasket } from "../basket/basketStructure"
import { IDeliveryAddress, IOrderList } from "./orderStructure";

export type OrderAction =
    | {
        type: "createOrder",
        basket: IBasket;
        deliveryAdress: IDeliveryAddress
    }

    | {
        type: "deleteUnpaidOrder", //odnosi se na brisanje ordera koji nije placen (kada se napusti forma za placanje)
        orderNo: number
    }
    | {
        type: "payOrder"
        orderNo: number
    }

export let counter = 0;
export function orderReducer(
    oldOrderList: IOrderList,
    action: OrderAction
): IOrderList {


    switch (action.type) {
        case "deleteUnpaidOrder": {
            return {
                orders: oldOrderList.orders.filter((e) => {
                    if (e.orderNo != action.orderNo) return true
                    else if (e.paid) return true
                    else return false
                }
                )
            }

        }


        case "createOrder": {

            return {
                orders: [
                    ...oldOrderList.orders, // kopiram niz u novi niz
                    {
                        orderNo: ++counter, // isto kao counter=counter+1; orderNo=counter;
                        //orderNo: counter++// isto kao orderNo=counter; counter=counter+1 Pitanje je dakle u kom se trenutku uzima vrednost countera 
                        orderDate: Date(),
                        paid: false,
                        totalOrderItemsNo: action.basket.totalItemsNo,
                        totalOrderPrice: action.basket.totalPrice,
                        deliveryAdress: {...action.deliveryAdress},
                        orderItems: action.basket.items.map((e) => {
                            return {
                                productId: e.productId,
                                amountPrice: e.amountPrice,
                                color: e.color,
                                productAmount: e.productAmount,
                                size: e.size,
                            }
                        })
                    }
                ]
            }
        }

        case "payOrder": {
        return {
            orders: oldOrderList.orders.map ((e)=> {
                if (e.orderNo!==action.orderNo) {
                    return e;
                }
                else {
                return {...e, 
                    deliveryAdress:{...e.deliveryAdress},
                    orderItems: [...e.orderItems],
                    paid:true} //ovde sam kopirala objekat i promenila mu property a gore u CreateOrder sam kopirala ceo niz u novi niz i dodala novi element tog novog niza
                }
            })
        }
        }

        default: return oldOrderList
    }
}



    /*     function generateRandomNo(): number {
            let minm = 100000
            let maxm = 999999
            let randomNo = Math.floor(Math
                .random() * (maxm - minm + 1)) + minm
            let sameOrder = oldOrderList.orders.find((e) => {
                if (e.orderNo === randomNo)
                    return true
                else false
            })
            if (sameOrder)
                return generateRandomNo()
            else return randomNo
    
        } */