import { useContext } from "react";
import { CardGroup } from "react-bootstrap";
import { basketContext } from "./basketContext";
import { BasketItem } from "./BasketItem";

export function BasketComponent () {
    const currentBasket=useContext(basketContext)
    return (
            <CardGroup>
            {currentBasket.items.map (e=> <BasketItem item={e}/> )
            
            }
            </CardGroup> 
    )
}