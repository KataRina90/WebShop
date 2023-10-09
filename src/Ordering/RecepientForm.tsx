export function RecepientForm () {

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
}

}