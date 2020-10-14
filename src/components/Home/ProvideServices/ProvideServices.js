import React from 'react';
import ServicesCard from './ServicesCard/ServicesCard';

const services = [
    {
        image:'https://i.ibb.co/wL9hHCp/web-and-mobile-design.png',
        title:'Web & Mobile design',
        description:'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
    },
    {
        image:'https://i.ibb.co/3fjfrHq/graphic-design.png',
        title:'Graphic design',
        description:'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    },
    {
        image:'https://i.ibb.co/R3Dy41S/web-development.png',
        title:'Web development',
        description:'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    }
]

const ProvideServices = () => {
    return (
        <div className="container">
            <h2 className= "text-center  mb-5">Provide awesome <span style={{color: '#7AB259'}} >services</span> </h2>
            <div className= 'row d-flex justify-content-center mb-4 ' >
                {
                    services.map((service) => <ServicesCard key = {service.image} service = { service}></ServicesCard> )
                }
            </div>
        </div>
    );
};

export default ProvideServices;