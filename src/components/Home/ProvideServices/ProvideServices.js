import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard/ServicesCard';

// const services = [
//     {
//         image:'https://i.ibb.co/wL9hHCp/web-and-mobile-design.png',
//         title:'Web & Mobile design',
//         description:'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
//     },
//     {
//         image:'https://i.ibb.co/3fjfrHq/graphic-design.png',
//         title:'Graphic design',
//         description:'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
//     },
//     {
//         image:'https://i.ibb.co/R3Dy41S/web-development.png',
//         title:'Web development',
//         description:'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
//     }
// ]

const ProvideServices = () => {
    // const serviceAdded = () => {
    //     fetch("http://localhost:5000/", {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json'},
    //         body: JSON.stringify(services)
    //     })
    // }


        // Get services info for home component.
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