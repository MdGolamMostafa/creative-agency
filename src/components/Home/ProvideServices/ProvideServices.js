import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard/ServicesCard';


const ProvideServices = () => {
        const [servicesInfo ,setServicesInfo] = useState([]);

            useEffect(() => {
                fetch('http://localhost:5000/servicesProduct')
                .then(response => response.json())
                .then(response =>{
                    console.log(response);
                    setServicesInfo(response)
                })
            },[])
    return (
        <div className="container">
            <h2 className= "text-center  mb-5">Provide awesome <span style={{color: '#7AB259'}} >services</span> </h2>
            <div className= 'row d-flex justify-content-center mb-4 ' >
                {
                    servicesInfo.map((service) => <ServicesCard key = {service._id} service = { service}></ServicesCard> )
                }
            
            </div>
        </div>
    );
};

export default ProvideServices;