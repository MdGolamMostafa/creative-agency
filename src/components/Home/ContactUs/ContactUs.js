import React from 'react';
import ContactForm from './ContactForm';

const ContactUs = () => {
    return (
        <div style={{backgroundColor:'#FBD062',height:'637px'}} >
            <div className = 'row mb-5'>
                <ContactForm/>
            </div>
            <footer className="copyRight text-center mt-5">
                <p>copyright Orange labs {(new Date()).getFullYear()}</p>
            </footer>
        </div>
    );
};

export default ContactUs;