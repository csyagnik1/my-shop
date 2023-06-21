import React, { useState } from 'react'
import './Myform.css'


const Myform = () => {
    const [userRegistration, setuserRegistration] = useState({
        uname: "",
        email: "",
        message: ""


    }

    );


    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuserRegistration({ ...userRegistration, [name]: value })


    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { ...userRegistration };
        console.log(newUser);

        const res = fetch(`https://my-json-db.onrender.com/contacts`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ ...newUser })

        })
        .then (alert("Your message has been added"));
        



    }



    return (
        <>
            <div className='form-container w3-centre'>
                <h1>Contact us</h1>

                <form action="" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="uname">Name</label>
                        <input type="text" id="uname"
                            className="forminput"
                            value={userRegistration.uname}
                            onChange={handleInput}
                            name="uname" placeholder="Your name..." />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input type="text" id="email"
                            className="forminput"
                            value={userRegistration.email}
                            onChange={handleInput}
                            name="email" placeholder="Your E-mail..." />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <input type="text" id="message"
                            className="forminput"
                            value={userRegistration.message}
                            onChange={handleInput}
                            name="message" placeholder="Your message..." />
                    </div>

                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </>

    )
}

export default Myform

