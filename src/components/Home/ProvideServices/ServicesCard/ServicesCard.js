import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './ServiceCard.css';
const ServicesCard = ({service}) => {
    
        // const {image,title,description,_id} = service;
        // const {_id} = useParams();
        const history = useHistory();
        
        const handleClick = (id) => { 
        history.push(`/customer/order/${id}`);
        };
        // onClick={() => handleClick()} 

    return (
        <div onClick={() => handleClick(service._id)} className="col-md-3 col-sm-6 mx-1 mb-1 text-center services-bg">
            {/* <img style={{height: '100px'}} className="img-fluid mb-1" src={`data:image/png;base64,${service.image.img}`} alt=""/> */}
            <img style={{height: '100px'}} className="img-fluid mb-1" src={service.image} alt=""/>
            <h4 style={{color: '#111430'}} >{service.title}</h4>
            <p>{service.description}</p>
        </div>
        
    );
};

export default ServicesCard;
