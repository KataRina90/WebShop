//testiramo reducer da vidimo da li vraca dobro stanje 
import { basketReducer } from "./basketReducer"
import { IBasket } from "./basketStructure"
const initBasket: IBasket = {
    items: [],
    totalItemsNo: 0,
    totalPrice: 0
}
describe('Basket reducer testing', () => {
    test('adding new item to bakset when basket is empty', () => {
        let newBasket = basketReducer(initBasket, {
            type: "addItem",
            productId: '001',
            amount: 2,
            color: 'white',
            price: 100,
            size: 'S'
        })
        expect(newBasket).toEqual(
            {
                items: [{
                    color: 'white',
                    price: 100,
                    productAmount: 2,
                    productId: '001',
                    size: 'S'
                }],
                totalItemsNo: 2,
                totalPrice: 100
            } as IBasket
        )
        expect(basketReducer(newBasket, {
            type: "addItem",
            productId: '003',
            amount: 3,
            color: 'black',
            price: 150,
            size: 'L'
        })).toEqual(
            {
                items: [{
                    color: 'white',
                    price: 100,
                    productAmount: 2,
                    productId: '001',
                    size: 'S'
                },
                {
                    color: 'black',
                    price: 150,
                    productAmount: 3,
                    productId: '003',
                    size: 'L'
                }],
                totalItemsNo: 5,
                totalPrice: 250
            } as IBasket
        )
    })
})