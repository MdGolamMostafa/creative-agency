import React from 'react';
import WorkSlides from './WorkSlides/WorkSlides';

const OurWorks = () => {

    return (
        <div style={{height: '650px' , padding: '92px', backgroundColor: '#111430'}} >
            <h2 className = "text-center  mb-5"><span style = {{color: '#ffff'}}>Here are some of </span> <span style = {{color: '#7AB259'}}>our works</span> </h2>
            <div className = "row">
                <div className="col-4"><WorkSlides></WorkSlides></div>
                <div className="col-4"><WorkSlides></WorkSlides></div>
                <div className="col-4"><WorkSlides></WorkSlides></div>
           
            </div>
            
            
        </div>
    );
};

export default OurWorks;