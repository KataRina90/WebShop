import { orderReducer } from "./orderReducer"
import { IOrderList } from "./orderStructure"

describe('Order reducer testing for new order', () => {
    const initOrderList: IOrderList = {
        orders: []
    }
    test('creating new order', () => {
    let newOrderlist=orderReducer(initOrderList,{
        type: "createOrder",
        basket: {
            items: [
            {
                productId: '001',
                amountPrice: 100,
                productAmount: 2,
                color: 'white',
                size: 'S'
            },
            {
                productId: '002',
                amountPrice: 150,
                productAmount: 3,
                color: 'yellow',
                size: 'S'
            },
            {
                productId: '003',
                amountPrice: 200,
                productAmount: 4,
                color: 'black',
                size: 'XL'
            }
            ],
            totalItemsNo:3,
            totalPrice:450
        }
    })
    expect(newOrderlist).toEqual({
    orders: [ {
        orderDate:Date(),
        orderItems: [
            {
                productId: '001',
                amountPrice: 100,
                productAmount: 2,
                color: 'white',
                size: 'S'
            },
            {
                productId: '002',
                amountPrice: 150,
                productAmount: 3,
                color: 'yellow',
                size: 'S'
            },
            {
                productId: '003',
                amountPrice: 200,
                productAmount: 4,
                color: 'black',
                size: 'XL'
            }
            ],
            //proveri da li moze neki property da bude izostavljen sa toEqual
            paid:false,
            totalOrderItemsNo:3,
            totalOrderPrice:450,
            orderNo:891567
    
    }
    
    ]
    } as IOrderList)
})
})