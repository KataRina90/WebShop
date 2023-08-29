import { Color } from "react-bootstrap/esm/types";
import { Size } from "../Products/Product";
import { IBasket } from "./basketStructure";
export type BasketAction =
  | {
      type: "addItem";
      productId: string;
      amount: number;
      price: number;
      size: Size;
      color: Color;
    }
  | { type: "removeItem"; productIndex: number }
  | {
      type: "editItem";
      productId: string;
      amount: number;
      price: number;
      size: Size;
      color: Color;
    };

export function BasketReducer(
  oldBasket: IBasket,
  action: BasketAction
): IBasket {
  switch (action.type) {
    case "addItem": {
      return {
        ...oldBasket,
        items: [
          ...oldBasket.items,
          {
            productId: action.productId,
            productAmount: action.amount,
            price: action.price,
            color: action.color,
            size: action.size,
          },
        ],
        totalItemsNo: oldBasket.totalItemsNo + action.amount,
        totalPrice: oldBasket.totalPrice + action.price,
      };
    }
    case "removeItem": {
      return {
        totalItemsNo:
          oldBasket.totalItemsNo -
          oldBasket.items[action.productIndex].productAmount,
        items: oldBasket.items.filter((e, i) => i !== action.productIndex),
        totalPrice:
          oldBasket.totalPrice - oldBasket.items[action.productIndex].price,
      };

      /*  array.filter((e, i) => i !== itemIndex) koristimo filter metodu jer ona stvara novi niz elemenata bez datog elementa. Splice metoda nije mogla da se koristi jer menja postojeci niz, a da ne stvara novi. Da sam koristila to bi znacilo da se u memoriji brise elemenat postojeceg niza, ali posto niz nije nov React ne registruje to kao promenu i ne renderuje */
    }

    case "editItem": {
      let oldItemAmount = 0;
      let oldItemPrice = 0;
      return {
        items: oldBasket.items.map((e) => {
          if (e.productId === action.productId) {
            oldItemAmount = e.productAmount;
            oldItemPrice = e.price;
            return {
              productId: e.productId,
              price: action.price, // uzimam cenu iz akcije jer se promenila
              productAmount: action.amount,
              size: action.size,
              color: action.color,
            };
          } else return e;
        }),
        totalItemsNo: oldBasket.totalItemsNo + (action.amount - oldItemAmount),
        totalPrice: oldBasket.totalPrice + (action.price - oldItemPrice),
      };
    }

    default:
      return oldBasket;
  }
}
