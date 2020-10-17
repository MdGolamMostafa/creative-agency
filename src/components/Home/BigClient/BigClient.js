import React from 'react';
import './BigClient.css';
const BigClient = () => {
    return (

        <div className = 'container'>
            <div className="row mt-5 d-flex justify-content-center ">
                <div className="col-xs-6 col-md-2 cor-md-offset-2">
                    <img className="img-fluid mw-10 h-25 d-inline-block" src="https://i.ibb.co/BzdSMrr/slack.png"  alt = "slack"/>
                </div>
                <div className="col-xs-6 col-md-2">
                    <img className="img-fluid mw-10 h-25 d-inline-block" src="https://i.ibb.co/591xMgK/google.png"  alt = "google"/>
                </div>
                <div className="col-xs-6 col-md-2">
                    <img className="img-fluid mw-10 h-25 d-inline-block" src="https://i.ibb.co/6y6XWGx/uber.png"  alt = "uber"/>
                </div>
                <div className="col-xs-6 col-md-2">
                    <img className="img-fluid mw-10 h-25 d-inline-block" src="https://i.ibb.co/jLtkDmB/netflix.png" alt="netflix"/>
                </div>
                <div className="col-xs-6 col-md-2">
                    <img className="img-fluid mw-10 h-25 d-inline-block" src="https://i.ibb.co/WzZK55j/airbnb.png"  alt ='airbnb'/>
                </div>
            </div>
        </div>
    );
};

export default BigClient;