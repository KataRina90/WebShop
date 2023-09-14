import { ChangeEventHandler, SetStateAction, useEffect, useState } from "react";
import { Col, Form, Placeholder, Row } from "react-bootstrap";
import Select from "react-select"
interface CountryProps {
    value: string
    label: string
}
export function UserDetails() {
    const [name, setName] = useState("");
    const [address, setAdress] = useState("");
    const [plz, setPlz] = useState("");
    const [city, setCity] = useState("");
    const [card, setCard]=useState("");
    const handleSubmit = (event: any) => {
        event.preventDefault();
        /*    <h2> Thanks for shopping with us! Soon you will receive an email with your order summary. </h2> */
    }
    const [countries, setCountries] = useState<CountryProps[]>([])
    const [selectedCountry, setSelectedCountry] = useState('')
    const [selectedPay, setSelectedPay]=useState('')
    const handlePaymentChange = (selectedOption: any) => {
        setSelectedPay(selectedOption);
    };

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
        <form onSubmit={handleSubmit}>
            <h4> Delivery address </h4>
            <label> Recepeint's first and last name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label> <br />

            <label> Street and number:
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAdress(e.target.value)}
                />
            </label> <br />
            <Row>
                <Col sm={4}>
                    <label> PLZ:
                        <input
                            type="number"
                            value={plz}
                            onChange={(e) => setPlz(e.target.value)}
                        />
                    </label>
                </Col>
                <Col sm={8}>

                    <label> City:
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </label> <br />
                </Col>
            </Row>

            <div>
                <label htmlFor="country">Select country:
                    <Form.Select aria-label="Default select example" onChange={handleCountryChange}>
                        <option> -- </option>
                        {countries.map((country) => (
                            <option value={country.value}> {country.label} </option>
                        ))}
                    </Form.Select> <br/>
                </label>
            </div>

            <h4> Payment method </h4>
            <label htmlFor="payment"> Choose your payment method: 
            <Form.Select aria-label="Default select example" onChange={handlePaymentChange}> 
            <option> -- </option>
            <option value="card"> Credit / Debit Card</option>
            <option value="paypal"> PayPal </option>
            </Form.Select>
            </label> <br/> 
            <label> Enter your card number:  
                <input
                    type= "number"
                    value={card}
                    onChange={(e) => setCard(e.target.value)}
                />
            </label>
          

        </form>
    )
}