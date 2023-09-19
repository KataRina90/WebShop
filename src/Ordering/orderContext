import { createContext, useContext, useReducer } from "react";
import {orderReducer,OrderAction} from "./orderReducer"
import { IOrderList } from "./orderStructure";
const emptyOrder:IOrderList= {orders:[],totalOrdersNo:0}
const orderContext=createContext<IOrderList>(emptyOrder)
const dispatchContext = createContext<React.Dispatch<OrderAction>>(null as unknown as React.Dispatch<OrderAction>)
export function OrderProvider({children}:React.PropsWithChildren<unknown>) {
    const [currentOrder, orderDispatch] = useReducer(orderReducer, emptyOrder)
    return (
        <orderContext.Provider value={currentOrder}>
            <dispatchContext.Provider value={orderDispatch}>
                {children}
            </dispatchContext.Provider>
        </orderContext.Provider>
    )
}
//stavila basketContext.Provider kao siri u odnosu na dispathContext.provider jer npr. home komponenti treba pristup basketu, a ne i dispatch-u
export function useBasketProvider () :[IBasket,React.Dispatch <BasketAction>] {
    return [useContext(basketContext), useContext(dispatchContext)]
}
