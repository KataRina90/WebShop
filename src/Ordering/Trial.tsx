/* import { useState } from "react";



const CheckoutForm = () => {

    const[name,setName]=useState('');
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');

const submitHandler = (e: any) => {
    e.preventDefault()
    console.log(e.target.value)
}

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>
                    Name:
                </label>
                <input
                    type='text'
                    placeholder='John Doe' />
            </div>

            <div>
                <label>
                    email:
                </label>
                <input
                    type='email'
                    placeholder='john@doe.com' />
            </div>

            <div>
                <label>
                    Password:
                </label>
                <input
                    type={'password'}
                    placeholder='thisisyourpassword' />
            </div>

            <button type="submit"> Submit </button>
        </form>
    )
}

export default CheckoutForm */