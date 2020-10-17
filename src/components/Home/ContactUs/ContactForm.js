import React from 'react';

const ContactForm = () => {
    return (
        <div className = 'container mt-5'>
            <div className = 'row mt-5'>
                <div className="col-md-6  text-white mb-5 offset-1">
                    <h1 style = {{color: '#2D2D2D'}}>
                        Let us handle your <br/> project, professionally.
                    </h1>
                    <p><small>
                        With well written codes, we <br/>
                        build amazing apps for all platforms,<br/>
                        mobile and web apps in general.
                    </small></p>
                </div>
                <div className="col-md-5 mx-auto">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your email address"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your name / company’s name"/>
                        </div>
                        <div className="form-group">
                            <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                        </div>
                        <div className="form-group ">
                            <button className ='btn btn-dark  px-4' type="button"  >Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;