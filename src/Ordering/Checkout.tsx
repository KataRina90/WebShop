import { useEffect, useState, useContext, useReducer } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useBasketProvider } from "../basket/basketContext";
import { useOrderProvider } from "./orderContext";
import { OrderDetails } from "./OrderDetails";
interface CountryProps {
    value: string
    label: string
}

export function Checkout() {
    const [name, setName] = useState("");
    const [address, setAdress] = useState("");
    const [postcode, setPostcode] = useState("");
    const [city, setCity] = useState("");
    const [card, setCard] = useState("");
    const [countries, setCountries] = useState<CountryProps[]>([])
    const [selectedCountry, setSelectedCountry] = useState('')
    const [selectedPay, setSelectedPay] = useState('') //da li mi treba da se cuva selekotvano stanje? verovatno da, za placanje dalje.
    const handlePaymentChange = (selectedOption: any) => {
        setSelectedPay(selectedOption);
    };

    const validationRules = {
        name: /^[A-Za-z\s]+$/, // Only letters and spaces allowed
        address: /^.{5,}$/, // Minimum 5 characters
        city: /^[A-Za-z\s]+$/, // Only letters and spaces allowed
        postcode: /^[0-9]+$/, // Only numbers
        email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // Email format
        card: /^[0-9]+$/
    };
    const [formError, setFormError] = useState("")

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (
            !name ||
            !address ||
            !postcode ||
            !city ||
            !card ||
            !selectedCountry ||
            !selectedPay
        ) {
            alert("Please fill out all fields.");
        }
        else {
            dispatchOrder({
                type: "payOrder",
                orderNo: currentOrder!.orderNo
            })

            dispatchBasket({
                type: "clearItem"
            })
            navigate("/thankyou")
        }



    }

    const navigate = useNavigate();
    const [allOrders, dispatchOrder] = useOrderProvider();
    const currentOrder = allOrders.orders.length > 0 ? allOrders.orders[allOrders.orders.length - 1] : null; //displaying the last created order
    const [currentBasket, dispatchBasket] = useBasketProvider();

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
                <form onSubmit={handleSubmit}>
                    <h4> Delivery address </h4>
                    <label> Recepient's first and last name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label> <br />

                    <label> Street and number:
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAdress(e.target.value)}
                            required
                        />
                    </label> <br />
                    <Row>
                        <Col>
                            <label> PLZ:
                                <input
                                    type="number"
                                    value={postcode}
                                    onChange={(e) => setPostcode(e.target.value)}
                                    required
                                />
                            </label>
                        </Col>
                        <Col sm={7}>

                            <label> City:
                                <input
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    required
                                />
                            </label> <br />
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
                            value={card}
                            onChange={(e) => setCard(e.target.value)}
                            required
                        />
                    </label>
                    {/*         <button type="submit" onClick={handleSubmit}> Submit </button> */}
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