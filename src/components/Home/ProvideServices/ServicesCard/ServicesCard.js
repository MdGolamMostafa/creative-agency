import React from 'react';
import './ServiceCard.css';
const ServicesCard = ({service}) => {
    return (
        <div className="col-md-3 col-sm-6 mx-1 mb-1 text-center services-bg">
            <img style={{height: '100px'}} className="img-fluid mb-1" src={service.image} alt=""/>
            <h4 style={{color: '#111430'}} >{service.title}</h4>
            <p>{service.description}</p>
        </div>
        
    );
}

export default ServicesCard;
