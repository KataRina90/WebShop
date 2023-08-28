import { createContext } from "react";
import { IBasket } from "./basketStructure";

export const basketContext=createContext<IBasket>({items:[],totalItemsNo:0,totalPrice:0})