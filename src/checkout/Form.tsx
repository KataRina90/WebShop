import { ChangeEventHandler, SetStateAction, useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Select from "react-select"

export function UserDetails() {
    const [name, setName] = useState("");
    const [address, setAdress] = useState("");
    const [plz, setPlz] = useState("");
    const [city, setCity] = useState("");
    const handleSubmit = (event: any) => {
        event.preventDefault();
        <h2> Thanks for shopping with us! Soon you will receive an email with your order summary. </h2>
    }
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

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
            <label> Your first and last name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>

            <label> Your Adress:
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAdress(e.target.value)}
                />
            </label>
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
                    </label>
                </Col>
            </Row>
            <div>
                <label htmlFor="country">Select your country:
                    <Select> 
                     onChange={handleCountryChange}
                     placeholder="Select your country">>
                        <option 
                        id="country"
                        value={selectedCountry}
                       options={countries}
                       </Select>

                </label>
            </div>

        </form>
    )
}

/* function MyForm() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your age:
          <input 
            type="number" 
            name="age" 
            value={inputs.age || ""} 
            onChange={handleChange}
          />
          </label>
          <input type="submit" />
      </form>
    )
  } */