import React from 'react';

const FeedbackCard = ({feedback}) => {
    const {title,name,image} = feedback;
    return (
        <div className="col-md-3 col-sm-6 mx-1 mb-1 services-bg">

            <div className = "d-flex justify-content-center mb-1">
                <div>
                    <img style={{height: '60px',width: '60px'}} className="img-fluid mt-3 mr-2" src={image} alt=""/>
                </div>
                <div className="mt-3 text-center">
                    <h5>{name}</h5>
                    <h4 style={{color: '#111430'}} >{title}</h4>
                </div>
            
            </div>
                <p>Lorem ipsum, dolor sit amet 
                    consectetur adipisicing elit.
                    Perferendis, quaerat consequatur
                    corporis
                </p>
        </div>
    );
};

export default FeedbackCard;