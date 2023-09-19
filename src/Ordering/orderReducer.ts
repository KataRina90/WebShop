import { IBasket } from "../basket/basketStructure"
import { IOrderList } from "./orderStructure";

export type OrderAction =
    | {
        type: "createOrder",
        orderItems: IBasket;
        totalOrderItemsNo: number, 
        totalOrderPrice: number
        orderNo: number,
        orderDate: Date

    }

    | {
        type: "deleteOrder",
        orderNo: number,
        noToDelete: number
    }
    | {
        type: "payOrder"
        orderNo: number,
        totalOrderPrice: number
    }

export function orderReducer(
    oldOrderList: IOrderList,
    action: OrderAction
) {
    function generateRandomNo(): number {
        let minm = 100000
        let maxm = 999999
        let randomNo=Math.floor(Math
                .random() * (maxm - minm + 1)) + minm
      let sameOrder=oldOrderList.orders.find((e)=>{
        if (e.orderNo===randomNo)
        return true
        else false
      }) 
      if (sameOrder)
      return generateRandomNo()
      else return randomNo
        
    } 
   
    switch (action.type) {
        case "deleteOrder": {
            return {
                orders: oldOrderList.orders.filter((e) => {
                    if (e.orderNo != action.orderNo) {
                        return true
                    }
                    else return false
                }),
                totalOrdersNo: oldOrderList.totalOrdersNo - action.noToDelete
            }
        }
        case "createOrder": {

            return {
                orders: [...oldOrderList.orders, {
                    orderDate: action.orderDate,
                    orderItems: action.orderItems,
                    orderNo: generateRandomNo,
                    totalOrderItemsNo: action.totalOrderItemsNo,
                    totalOrderPrice: action.totalOrderPrice
                }],
                totalOrdersNo: oldOrderList.totalOrdersNo + 1
            }
        }
    }
}