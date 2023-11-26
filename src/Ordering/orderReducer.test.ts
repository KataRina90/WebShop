import { orderReducer, counter } from "./orderReducer"
import { IOrderList } from "./orderStructure"

describe('Order reducer testing for new order', () => {
    const initOrderList: IOrderList = {
        orders: []
    }
    test('creating new order', () => {
        let newOrderlist = orderReducer(initOrderList, {
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
                totalItemsNo: 3,
                totalPrice: 450
            },
            deliveryAdress: {
                recepientName: 'Katarina Neskovic',
                streetName: 'Wolfshagenerstrasse',
                streetNo: '64',
                postcode: '13187',
                city: 'Berlin',
                country: 'Germany'
            }
        })
        expect(newOrderlist).toEqual({
            orders: [{
                orderDate: Date(),
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
                paid: false,
                totalOrderItemsNo: 3,
                totalOrderPrice: 450,
                orderNo: counter,
                deliveryAdress: {
                    recepientName: 'Katarina Neskovic',
                    streetName: 'Wolfshagenerstrasse',
                    streetNo: '64',
                    postcode: '13187',
                    city: 'Berlin',
                    country: 'Germany'
                }

            }

            ]
        } as IOrderList)
    })
})

describe ('Order reducer testing for deleting order', ()=>{
    const initOrderList:IOrderList={
        orders: [
            { orderItems: [
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
            paid: false,
                totalOrderItemsNo: 3,
                totalOrderPrice: 450,
                orderNo: 1,
                deliveryAdress: {
                    recepientName: 'Katarina Neskovic',
                    streetName: 'Wolfshagenerstrasse',
                    streetNo: '64',
                    postcode: '13187',
                    city: 'Berlin',
                    country: 'Germany'
                },
                orderDate:Date()

            },

            { orderItems: [
                {
                    productId: '002',
                    amountPrice: 100,
                    productAmount: 2,
                    color: 'black',
                    size: 'S'
                },
                {
                    productId: '004',
                    amountPrice: 200,
                    productAmount: 4,
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
            paid: false,
                totalOrderItemsNo: 3,
                totalOrderPrice: 500,
                orderNo: 2,
                deliveryAdress: {
                    recepientName: 'Katarina Neskovic',
                    streetName: 'Wolfshagenerstrasse',
                    streetNo: '64',
                    postcode: '13187',
                    city: 'Berlin',
                    country: 'Germany'
                },
                orderDate:Date()

            }
        ]
    }
    test ('deleting an order', ()=> {
    let newOrderlist=orderReducer(initOrderList, {
        type:"deleteUnpaidOrder",
        orderNo:2
    })
    expect (newOrderlist).toEqual({
      orders:[ 
        { orderItems: [
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
        paid: false,
            totalOrderItemsNo: 3,
            totalOrderPrice: 450,
            orderNo: 1,
            deliveryAdress: {
                recepientName: 'Katarina Neskovic',
                streetName: 'Wolfshagenerstrasse',
                streetNo: '64',
                postcode: '13187',
                city: 'Berlin',
                country: 'Germany'
            },
            orderDate:Date()

        }

      ]
    } as IOrderList)
    })
}
)