import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../../App';
import * as firebase from "firebase/app";
import './Navbar.css'
const Navbar = () => { 

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    return (
        <div className="container fluid mb-5 pb-3">
            <div className="row ">
                <div className ="header nav navbar-header mt-5 text-align-center">
                    <ul>                        
                        <Link to="/home">                                
                            <img style={{height: '43px'}} className=" mr-5 " src={"http://i.ibb.co/n737P2n/logo.png"} alt="" />
                        </Link>                   
                    </ul>

                    <ul className ="active ml-5 ">
                        <li>
                            <Link to="#">Home</Link>
                        </li>
                    </ul>
                    <ul>
                        <Link to="#">Our Portfolio</Link>
                    </ul>
                    <ul>
                        <Link className = "nav link" to="/dashboard">Our Team</Link>
                    </ul>
                    <ul>
                        <Link to="/admin/">Contact us</Link>
                    </ul>
                    <ul >

                        
                            
                                <Link to="/login"><button className=" btn btn-dark  px-4">Login</button></Link>
                       

                        
                    </ul>
                </div>
                
            </div>
    </div>

    );
};

export default Navbar;