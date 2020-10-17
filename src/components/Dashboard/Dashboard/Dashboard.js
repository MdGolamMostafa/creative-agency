import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Order from '../Order/Order';
import ServicesList from '../ServicesList/ServicesList';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../../Home/Navbar/Navbar';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const [admin , setAdmin] = useState(false);
    useEffect(() => {
        fetch('https//localhost:5000/admin',{
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({email: loggedInUser.email})
            })
            .then(response => response.json())
            .then(data => setAdmin(data));
    },[]);


    const [customer,setCustomer] =useState(false);
    useEffect(() => {
        fetch('https//localhost:5000/customer',{
        method: 'POST',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify({email:loggedInUser.email})
        })                
        .then(response => response.json())
        .then(data => setCustomer(data));
    },[]);

  
    return (
        <div  className="mx-3">
            <Navbar></Navbar>
                <div className="row">
                    <div className = 'col-md-4'>
                        <Sidebar/>
                    </div>               
                    <div className="col-md-8">
                        <div className = 'col-md-8'>
                                {
                                    <Order></Order>
                                }
                                {
                                    admin && <ServicesList></ServicesList>
                                }
                        </div>
                    </div>   
                </div>
        </div>
    );
};

export default Dashboard;