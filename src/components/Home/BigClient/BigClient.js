import React from 'react';
import './BigClient.css';
const BigClient = () => {
    return (

        <div className = 'container'>
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-xs-6 col-md-2 cor-md-offset-2">
                    <img className="img-fluid mw-10 h-25 d-inline-block" src="https://i.ibb.co/BzdSMrr/slack.png" />
                </div>
                <div className="col-xs-6 col-md-2">
                    <img className="img-fluid mw-10 h-25 d-inline-block" src="https://i.ibb.co/591xMgK/google.png" />
                </div>
                <div className="col-xs-6 col-md-2">
                    <img className="img-fluid mw-10 h-25 d-inline-block" src="https://i.ibb.co/6y6XWGx/uber.png" />
                </div>
                <div className="col-xs-6 col-md-2">
                    <img className="img-fluid mw-10 h-25 d-inline-block" src="https://i.ibb.co/jLtkDmB/netflix.png" />
                </div>
                <div className="col-xs-6 col-md-2">
                    <img className="img-fluid mw-10 h-25 d-inline-block" src="https://i.ibb.co/WzZK55j/airbnb.png" />
                </div>
            </div>
        </div>
    );
};

export default BigClient;