import { createContext, useContext, useReducer } from "react";
import {orderReducer,OrderAction} from "./orderReducer"
import { IOrder, IOrderList } from "./orderStructure";
const emptyOrder:IOrderList= {orders:[]}
const orderContext=createContext<IOrderList>(emptyOrder)
const dispatchContext = createContext<React.Dispatch<OrderAction>>(null as unknown as React.Dispatch<OrderAction>)
export function OrderProvider({children}:React.PropsWithChildren<unknown>) {
    const [currentOrder, orderDispatch] = useReducer(orderReducer, emptyOrder)
    //ne znam da li mi stavrno treba i dispatch context? Samo ce Checkout komponenta da koristi akcije koje se trgigeruju dispatch-om, prema tome ne znam je li mi potreban kontekst?
    return (
        <orderContext.Provider value={currentOrder}>
            <dispatchContext.Provider value={orderDispatch}>  
                {children}
            </dispatchContext.Provider>
        </orderContext.Provider>
    )
}

//mislim da mi kod useOrderProvider ne treba da mi vraca i dispatch funkciju?
export function useOrderProvider (): [IOrderList,React.Dispatch<OrderAction>] {
    return [useContext(orderContext),useContext(dispatchContext)]
}