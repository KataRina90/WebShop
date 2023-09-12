import { Color } from "../Products/Product";
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
  | {
    type: "removeItem";
    productId: string
  }
  | {
    type: "editItem";
    productId: string;
    amount: number;
    price: number;
    size: Size;
  };

export function basketReducer(
  oldBasket: IBasket,
  action: BasketAction
): IBasket {
  switch (action.type) {
    case "addItem": {
      let sameProduct = oldBasket.items.find((e) => {
        if (e.productId === action.productId && e.size === action.size && e.color === action.color)
          return true
        else false
      })
      if (sameProduct) {
        return {
          items: [
            ...oldBasket.items.filter((e) => e != sameProduct), //filtriram one koji se razlikuju od proizvoda koji sam nasla (kopiram sve one druge)
            {
            productId:sameProduct.productId,
            productAmount:sameProduct.productAmount+action.amount,
            amountPrice:sameProduct.amountPrice+action.price,
            color:sameProduct.color, //ili action.color posto je isto
            size:sameProduct.size,//ili action.size posto je isto
            }
          ],
          totalItemsNo: oldBasket.totalItemsNo + action.amount,
          totalPrice: oldBasket.totalPrice + action.price
        }
      }
      else
        return {
          items: [
            ...oldBasket.items,
            {
              productId: action.productId,
              productAmount: action.amount,
              amountPrice: action.price,
              color: action.color,
              size: action.size,
            },
          ],
          totalItemsNo: oldBasket.totalItemsNo + action.amount,
          totalPrice: oldBasket.totalPrice + action.price,
        };
    }
    case "removeItem": {
      let indexOfElToRemove = 0
      return {

        items: oldBasket.items.filter((e, i) => {
          if (e.productId !== action.productId) {

            return true
          }
          else {
            indexOfElToRemove = i
            return false
          }
        }),
        totalPrice:
          oldBasket.totalPrice - oldBasket.items[indexOfElToRemove].amountPrice,

        totalItemsNo: oldBasket.totalItemsNo - oldBasket.items[indexOfElToRemove].productAmount,
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
            oldItemPrice = e.amountPrice;
            return {
              productId: e.productId,
              amountPrice: action.price, // uzimam cenu iz akcije jer se promenila
              productAmount: action.amount, // uzimam kolicinu iz akcije jer se promenila
              size: action.size, // uzimam velicinu iz akcije jer se promenila
              color: e.color // ne uzimam  iz akcije jer nemam mogucnost promene 
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
