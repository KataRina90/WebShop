import { Children, createContext, useContext, useReducer } from "react";
import { BasketAction, BasketReducer } from "./basketReducer";
import { IBasket } from "./basketStructure";
const emptyBasket: IBasket = { items: [], totalItemsNo: 0, totalPrice: 0 }
const basketContext = createContext<IBasket>(emptyBasket) //cuvam trenutno stanje korpe
const dispatchContext = createContext<React.Dispatch<BasketAction>>(null as unknown as React.Dispatch<BasketAction>)


//usereducer vraca trenutno stanje basketa i dispatch funkciju kojom se menja trenutno stanje basketa. A argumenti za reducer funkciju su tvoja reducer funkcija i inicijalno stanje basketa (u ovom slucaju kad je basket prazan). UseRecucer koristi inicijalno stanje smao prvi put kad se pozove.

// Pravimo parent komponentu kojom obuhvatamo decu kojoj treba pristup dispatch funkciji i trenutnom stanju. 
//Prent komponenta renderuje svoju decu unutar konteksta koje ona formira i setuje kontekstima vrednost na kontekst 1: dispatch funkciju i kontekst 2:trenutno stanje,
// a koje dobija pozivajuci reducer funkciju. Deca onda imaju pristup tim kontekstima. 

export function BasketProvider({children}:React.PropsWithChildren<unknown>) {
    const [currentBasket, basketDispatch] = useReducer(BasketReducer, emptyBasket)
    return (
        <basketContext.Provider value={currentBasket}>
            <dispatchContext.Provider value={basketDispatch}>
                {children}
            </dispatchContext.Provider>
        </basketContext.Provider>
    )
}

export function useBasketProvider () :[IBasket,React.Dispatch <BasketAction>] {
    return [useContext(basketContext), useContext(dispatchContext)]
}

