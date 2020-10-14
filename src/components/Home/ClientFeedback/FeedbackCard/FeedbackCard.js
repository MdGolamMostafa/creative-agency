import React from 'react';

const FeedbackCard = ({feedback}) => {
    const {title,name,image} = feedback;
    return (
        <div className="col-md-3 col-sm-6 mx-1 text-center services-bg">

            <div className = "d-flex justify-content-center mb-1">
                <div>
                    <img style={{height: '80px'}} className="img-fluid " src={image} alt=""/>
                </div>
                <div className="mt-3">
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