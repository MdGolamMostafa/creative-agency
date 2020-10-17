import React from 'react';
import ContactForm from './ContactForm';

const ContactUs = () => {
    return (
        <div style={{backgroundColor:'#FBD062',height:'620px'}} >
            <div className = 'row mb-5 ml-1'>
                <ContactForm/>
            </div>
            <footer className="copyRight footer text-center mt-5">
                <p className = 'footer'>copyright Orange labs {(new Date()).getFullYear()}</p>
            </footer>
        </div>
    );
};

export default ContactUs;