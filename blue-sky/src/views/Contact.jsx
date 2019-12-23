import React from 'react';
import '../css/contact.css';


function Contact() {
    return (
        <div className="contact-area" id="contact">
            <h1>Contact</h1>
            <div className="contactBlock">
                <form className="contactForm">
                    <h2>Send us a message:</h2>
                    <input type="text" placeholder="Name (First, Last)*" />
                    <input type="text" placeholder="Email*" />
                    <input type="number" placehoolder="Phone" />
                    <textarea type="text" placeholder="How can we help you?" />
                    <button type="submit">Send</button>
                </form>
                <div className="contactInfo">
                    <h1>Please reach out to us!</h1>
                    <p> 
                        We are happy to speak with premium growers and discuss their
                        extraction needs, our services, customization options, and 
                        pricing structure.
                    </p>
                    <h1>Blue Sky Lab, LLC</h1>
                    <p>
                        Mercer and Portland, Maine US 
                    </p>
                    <p>
                        Please call Chad: 207 491 4336 or Tom: 603 682 9700
                    </p>
                    <h1>Hours</h1>
                    <p>
                        By appointment.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact;