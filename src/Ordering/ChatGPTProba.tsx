import React, { useState } from 'react';

interface FormData {
    name: string;
    address: string;
    city: string;
    postcode: string;
    email: string;
}

function FormValidation() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        address: '',
        city: '',
        postcode: '',
        email: '',
    });

    const [errors, setErrors] = useState<Record<string, string | null>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name: nameInputElement, value } = e.target; //name i value su properties od e
        setFormData({
            ...formData,
            [nameInputElement]: value, //ime propertija je sadrzaj promenljive
        });

        /*   // Validation rules for each field
          const validationRules: Record<string, RegExp> = {
              name: /^[A-Za-z\s]+$/, // Only letters and spaces allowed
              address: /^.{5,}$/, // Minimum 5 characters
              city: /^[A-Za-z\s]+$/, // Only letters and spaces allowed
              postcode: /^\d{5}$/, // Exactly 5 digits
              email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // Email format is invalid
          };
  
          const validationMessages: Record<string, string> = {
              name: 'Only letters and spaces allowed',
              address: 'Minimum 5 characters',
              city: 'Only letters and spaces allowed',
              postcode: 'Exactly 5 digits',
              email: 'Email format is invalid'
          };
   */

        //drugi nacin da uradimo validaciju svakog polja sa odgovarajucom porukom
        const validationRules2: Record<string, { rule: RegExp, message: string }> = {
            name: { rule: /^[A-Za-z\s]+$/, message: ' Only letters and spaces allowed' },
            address: { rule: /^.{5,}$/, message: ' Minimum 5 characters' },
            city: { rule: /^[A-Za-z\s]+$/, message: 'Only letters and spaces allowed' },
            postcode: { rule: /^\d{5}$/, message: 'Exactly 5 digits' },
            email: { rule: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Email format is invalid' }
        };

        // Check if the entered value matches the validation rule for the field
        /*   const isValid = validationRules[nameInputElement].test(value); */
        const isValid = validationRules2[nameInputElement].rule.test(value);
        // Update the errors object with the validation result

/*         setErrors({
            ...errors,
          // [nameInputElement]: isValid ? null : `${nameInputElement} is invalid.`ovde je fiksirano hocu poruka da bude, ivdi liniju ispod, 
            [nameInputElement]: isValid ? null : validationMessages[nameInputElement],
        }); */
        
        setErrors({
            ...errors,
            [nameInputElement]: isValid ? null : validationRules2[nameInputElement].message,
        });



    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Check if there are any validation errors
        const hasErrors = Object.values(errors).some((error) => error !== null);

        if (hasErrors) {
            alert('Please correct the form errors before submitting.');
        } else {
            // Submit the form data
            alert('Form submitted successfully!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div>
                <label>Address:</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                />
                {errors.address && <p className="error">{errors.address}</p>}
            </div>
            <div>
                <label>City:</label>
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                />
                {errors.city && <p className="error">{errors.city}</p>}
            </div>
            <div>
                <label>Postcode:</label>
                <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                />
                {errors.postcode && <p className="error">{errors.postcode}</p>}
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormValidation;
