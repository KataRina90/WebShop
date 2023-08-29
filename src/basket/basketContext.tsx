import { createContext, useReducer } from "react";
import { BasketReducer } from "./basketReducer";
import { IBasket } from "./basketStructure";
const emptyBasket:IBasket={items:[],totalItemsNo:0,totalPrice:0}
export const basketContext=createContext<IBasket>(emptyBasket) //cuvam trenutno stanje korpe
const [currentBasket, basketDispatch]=useReducer(BasketReducer,emptyBasket) 
//usereducer vraca trenutno stanje basketa i dispatch funkciju kojom se menja trenutno stanje basketa. A argumenti za reducer funkciju su tvoja reducer funkcija i inicijalno stanje basketa (u ovom slucaju kad je basket prazan)



