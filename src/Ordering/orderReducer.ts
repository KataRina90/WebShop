import { IBasket } from "../basket/basketStructure"
import { IOrderList } from "./orderStructure";

export type OrderAction =
    | {
        type: "createOrder",
        basket: IBasket;

    }

    | {
        type: "deleteUnpaidOrder", //odnosi se na brisanje ordera koji nije placen (kada se napusti forma za placanje)
        orderNo: number
    }
    | {
        type: "payOrder"
        orderNo: number
    }

export function orderReducer(
    oldOrderList: IOrderList,
    action: OrderAction
): IOrderList {
    function generateRandomNo(): number {
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

    }

    switch (action.type) {
        case "deleteUnpaidOrder": {
            //check type
            const unpaidArray: IOrderList = {
                orders: oldOrderList.orders.filter((p) => {
                    p.paid === false
                })
            }

            return {
                orders: oldOrderList.orders.filter((e) => {
                    if (e.orderNo != action.orderNo &&
                        unpaidArray.orders.find((j) => {
                            if (j.orderNo === action.orderNo) return true
                            else return false
                        })) {
                        return true
                    }
                    else return false

                })
            }

           /*  return {
                orders: oldOrderList.orders.filter((e) => {
                    if (e.orderNo != action.orderNo) return true
                    else if (e.paid) return true
                    else return false
                }
                )
            } */

        }


        case "createOrder": {

            return {
                orders: [
                    ...oldOrderList.orders,
                    {
                        orderNo: generateRandomNo(),
                        orderDate: Date(),
                        paid: false,
                        totalOrderItemsNo: action.basket.totalItemsNo,
                        totalOrderPrice: action.basket.totalPrice,
                        orderItems: action.basket.items.map((e) => {
                            return {
                                productId: e.productId,
                                amountPrice: e.amountPrice,
                                color: e.color,
                                productAmount: e.productAmount,
                                size: e.size
                            }
                        })
                    }
                ]
            }
        }
        default: return oldOrderList
    }
}

