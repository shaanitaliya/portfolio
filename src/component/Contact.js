import React, { useState } from 'react'

export default function Contact() {
    const [info, setInfo] = useState({ name: '', email: '', contact: '', massage: '' })
    const getContact = async (name, email, contact, massage) => {
        const response = await fetch(`http://localhost/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, contact, massage })
        });
    }

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }

    const handleClick = (e) => {
        e.preventDefault()
        getContact(info.name, info.email, info.contact, info.massage)
        setInfo({ name: '', email: '', contact: '', massage: '' })
    }

    return (
        <>
            <div className="main-c">
                <h1 className="text-contact" style={{ color: 'white' }}>Contact us</h1>
                <div className="c-z">
                    <div className="form-input">
                        <input type="text" name="name" className='name' value={info.name} onChange={handleChange} placeholder="Your Name" required></input>
                    </div>
                    <div className="form-input">
                        <input type="email" name="email" className='name' value={info.email} onChange={handleChange} data-validate="required,Email,required" placeholder="Your Email Address" required></input>
                    </div>
                    <div className="form-input">
                        <input type="tel" name="contact" className='name' value={info.contact} onChange={handleChange} data-validate="required,phone,required" placeholder="Your contact number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input>
                    </div>
                    <div className="form-input">
                        <textarea name="massage" className='name' value={info.massage} onChange={handleChange} data-validate="required,Generic" placeholder="Your Message" required></textarea>
                    </div>
                    <button type="button" onClick={handleClick} className="btn btn-success">Success</button>
                </div>
            </div>
        </>
    )
}