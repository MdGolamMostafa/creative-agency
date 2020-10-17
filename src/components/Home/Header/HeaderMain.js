import React from 'react';

const HeaderMain = () => {
    return (
        <div className = 'row align-items-center'>
            <div className="col-md-5 col-sm-6 col-12  offset-md-1">
                <h1>
                    Let’s Grow Your <br/>
                    Brand To The <br/>
                    Next Level
                </h1>
                <p>Lorem ipsum dolor sit amet, 
                    consectetur <br/> adipiscing elit. Purus commodo ipsum  <br/>
                    duis laoreet maecenas. Feugiat 
                </p>
                <button className='btn btn-dark  px-4'>Hire us</button>
            </div>
            <div className="col-md-6 mb-5">
                <img style= {{width:"363px", height:"333px"}} src={"https://i.ibb.co/dmYgpWJ/Frame.png"} alt=""/>
            </div>
        </div>
    );
};

export default HeaderMain;