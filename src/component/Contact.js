import React, { useEffect } from 'react'

export default function Contact() {
    useEffect
    return (<>
        <h1 className="text-contact" style={{ color: 'white' }}>CONTACT</h1>
        <div className="container">
            <div className="form-input">
                <label for="field2">NAME *</label>
                <input type="text" name="field1" data-validate="required,Generic" placeholder="Your Name..." required></input>
            </div>
            <div className="form-input">
                <label for="field2">EMAIL *</label>
                <input type="email" name="email" data-validate="required,Email,required" placeholder="Your Email Address..." required></input>
            </div>
            <div className="form-input">
                <label for="field2">CONTACT *</label>
                <input type="tel" name="phone" data-validate="required,phone,required" placeholder="Your contact number..." pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input>
            </div>
            <div className="form-input">
                <label for="field2">MESSANGE *</label>
                <textarea name="field2" data-validate="required,Generic" placeholder="Your Message..." required></textarea>
            </div>
        </div>
    </>
    )
}