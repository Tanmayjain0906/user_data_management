import React, { useEffect, useState } from 'react'
import "./style.css";

function UserDataForm() {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [isFormDirty, setIsFormDirty] = useState(false);


    function handleName(e) {
        setName(e.target.value);
        setIsFormDirty(true);
    }

    function handleAddress(e) {
        setAddress(e.target.value);
        setIsFormDirty(true);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
        setIsFormDirty(true);
    }

    function handlePhone(e) {
        setPhone(e.target.value);
        setIsFormDirty(true);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !email || !address || !phone) {
            alert("Please Fill all the Feilds");
            return;
        }
        if (phone.length !== 10) {
            alert("Please Enter Valid Phone Number");
            return;
        }

        // Generate a random user ID
        const userId = generateUserId();

        const userData = { name, email, address, phone, userId };

        // Save data to local storage
        localStorage.setItem('userData', JSON.stringify(userData));

        alert('Form submitted successfully!');
        setIsFormDirty(false);
    }

    function generateUserId() {
        return '_' + Math.random().toString(36).substr(2, 9); // Generate a random string for user ID
    };

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (isFormDirty) {
                event.preventDefault();
                event.returnValue = ''; // Required for Chrome
                return ''; // Required for other browsers
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isFormDirty]);

    return (
        <div className='container'>
            <div className="form-container">
                <div className="form-header">
                    <h2>User Data Form</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={name} onChange={handleName} />
                    </div>

                    <div className="form-field">
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" name="address" value={address} onChange={handleAddress} />
                    </div>

                    <div className="form-field">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" value={email} onChange={handleEmail} />
                    </div>

                    <div className="form-field">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="phone" name="phone" value={phone} onChange={handlePhone} />
                    </div>

                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default UserDataForm;