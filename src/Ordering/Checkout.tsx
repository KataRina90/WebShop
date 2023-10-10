import { useEffect, useState, useContext, useReducer } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { colors } from "react-select/dist/declarations/src/theme";
import { useBasketProvider } from "../basket/basketContext";
import { useOrderProvider } from "./orderContext";
import { OrderDetails } from "./OrderDetails";

interface CountryProps {
    value: string
    label: string
}
interface FormData {
    name: string;
    address: string;
    city: string;
    postcode: string;
    email: string;
    card: number
}



export function Checkout() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        address: '',
        city: '',
        postcode: '',
        email: '',
        card: 0
    });
    const [countries, setCountries] = useState<CountryProps[]>([])
    const [selectedCountry, setSelectedCountry] = useState('')
    const [selectedPay, setSelectedPay] = useState('') //da li mi treba da se cuva selekotvano stanje? verovatno da, za placanje dalje.
    const handlePaymentChange = (selectedOption: any) => {
        setSelectedPay(selectedOption);
    };


    const [errors, setErrors] = useState<Record<string, string | null>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name: nameInputElement, value } = e.target;
        setFormData({
            ...formData,
            [nameInputElement]: value
        });
        const validationRules2: Record<string, { rule: RegExp, message: string }> = {
            name: { rule: /^[A-Za-z\s]+$/, message: ' Only letters and spaces allowed' },
            address: { rule: /^.{5,}$/, message: ' Minimum 5 characters' },
            city: { rule: /^[A-Za-z\s]+$/, message: 'Only letters and spaces allowed' },
            postcode: { rule: /^\d{5}$/, message: 'Exactly 5 digits' },
            email: { rule: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Email format is invalid' },
            card: { rule: /^\d{8,}$/, message: 'Card number needs to have at least 8 digits' }
        };
        const isValid = validationRules2[nameInputElement].rule.test(value);
        setErrors({
            ...errors,
            [nameInputElement]: isValid ? null : validationRules2[nameInputElement].message,
        });
    }

    const navigate = useNavigate();
    const [allOrders, dispatchOrder] = useOrderProvider();
    const currentOrder = allOrders.orders.length > 0 ? allOrders.orders[allOrders.orders.length - 1] : null; //displaying the last created order
    const [currentBasket, dispatchBasket] = useBasketProvider();
    const isvalidForm=():boolean => {
     if (errors.name!=null ||
        errors.address!=null||
        errors.city!=null||
        errors.postcode!=null||
        errors.email!=null||
        errors.card!=null
        ) 
        return false
        else return true
    }
    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (isvalidForm()) {
        
            dispatchOrder({
                type: "createOrder",
                basket: currentBasket,
                deliveryAdress: {
                    city: "",
                    country: "",
                    postcode: 0,
                    recepientName: "",
                    streetName: "",
                    streetNo: ""
                }
            })
            dispatchOrder({
                type: "payOrder",
                orderNo: currentOrder!.orderNo
            })

            dispatchBasket({
                type: "clearItem"
            })
            navigate("/thankyou")
        }
        else alert ('Correct all errors before placing the order')
        }
    

    useEffect(() => {
        // Fetch the list of countries from the REST Countries API
        fetch('https://restcountries.com/v2/all')
            .then((response: any) => response.json())
            .then((data: any) => {
                // Extract the country names from the response data
                const countryNames = data.map((country: { name: any; }) => ({
                    value: country.name,
                    label: country.name,
                }));
                // Set the list of countries in the state
                setCountries(countryNames);
            })
            .catch((error: any) => {
                console.error('Error fetching country data:', error);
            });
    }, []);

    const handleCountryChange = (selectedOption: any) => {
        setSelectedCountry(selectedOption);
    };



    return (
        <Row>
            <Col sm={8}>
                <form >
                    <h4> Delivery address </h4>
                    <label> Recepient's first and last name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label> 
                    <br />
                    <p style={{ color: 'red' }}> {errors.name} </p>
                    <label> Street and number:
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </label> <br />
                    <p style={{ color: 'red' }}> {errors.address} </p>
                    <Row>
                        <Col>
                            <label> Postcode:
                                <input
                                    type="number"
                                    name="postcode"
                                    value={formData.postcode}
                                    onChange={handleChange}
                                    required
                                />
                            </label> <br/>
                            <p style={{ color: 'red' }}> {errors.postcode} </p>
                        </Col>
                        <Col sm={7}>

                            <label> City:
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                            </label> <br />
                            <p style={{ color: 'red' }}> {errors.city} </p>
                        </Col>
                    </Row>
                    {/* ovde samo proveri da li input field ima value, odnosno da li je nesto odabrao*/}
                    <div>
                        <label htmlFor="country">Select country:
                            <Form.Select aria-label="Default select example" onChange={handleCountryChange}>
                                <option> -- </option>
                                {countries.map((country) => (
                                    <option value={country.value}> {country.label} </option>
                                ))}
                            </Form.Select> <br />
                        </label>
                    </div>

                    <h4> Payment method </h4>
                    <label htmlFor="payment"> Choose your payment method
                        <Form.Select aria-label="Default select example" onChange={handlePaymentChange}>
                            <option> -- </option>
                            <option value="card"> Credit / Debit Card</option>
                            <option value="paypal"> PayPal </option>
                        </Form.Select>
                    </label> <br />
                    <label> Enter your card number:
                        <input
                            type="number"
                            name="card"
                            value={formData.card}
                            onChange={handleChange}
                            required
                        />
                    </label> <br/>
                    <p style={{ color: 'red' }}> {errors.card} </p>
                </form>
            </Col>

            <Col sm={4}>
                <h4> Review your order </h4> <br />

                {
                    currentOrder !== null && < OrderDetails orderdetails={currentOrder} />
                }

                <button onClick={handleSubmit}>
                    PLACE ORDER
                </button>

            </Col>
        </Row>

    )
}


