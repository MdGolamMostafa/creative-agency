import React from 'react';
import './ServiceCard.css';
// import { AnimationWrapper } from 'react-hover-animation'

const ServicesCard = ({service}) => {
    
        const {image,title,description} = service;

    return (
        <div className="col-md-3 col-sm-6 mx-1 text-center services-bg">
            <img style={{height: '100px'}} className="img-fluid mb-1" src={image} alt=""/>
            <h4 style={{color: '#111430'}} >{title}</h4>
            <p>{description}</p>
        </div>
        
    );
};

export default ServicesCard;
