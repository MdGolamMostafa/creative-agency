import React from 'react';
// import { Link } from 'react-router';
import { Link } from "react-router-dom";

import './Navbar.css'
const Navbar = () => { 
    return (
        <div className="container fluid mb-5 pb-3">
            <div className="row ">
                <div className ="header nav navbar-header mt-5 text-align-center">
                    <ul>                        
                        <Link to="/home">                                
                            <img style={{height: '43px'}} className=" mr-5 " src={"http://i.ibb.co/n737P2n/logo.png"} alt="" />
                        </Link>                   
                    </ul>

                    <ul className ="active ml-5">
                        <Link to="/home">Home</Link>
                    </ul>
                    <ul>
                        <Link to="/home">Our Portfolio</Link>
                    </ul>
                    <ul>
                        <Link to="/home">Our Team</Link>
                    </ul>
                    <ul>
                        <Link to="/home">Contact us</Link>
                    </ul>
                    <ul >
                        <button className=" btn btn-dark">
                            <Link to="/login">Login</Link>
                        </button>
                    </ul>
                </div>
                
            </div>
    </div>

    );
};

export default Navbar;