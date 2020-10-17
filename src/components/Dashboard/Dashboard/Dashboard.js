import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Order from '../Order/Order';
import ServicesList from '../ServicesList/ServicesList';
import Sidebar from '../Sidebar/Sidebar';
import {Row,Col} from 'react-bootstrap';
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
            <h2 className = "text-center  mb-5">dashboard</h2>
            <Row>
                <Col md={4}>
                    <Sidebar/>
                </Col>

                <Col md={8}>
                    {
                        <Order></Order>
                    }
                    {
                        admin && <ServicesList></ServicesList>
                    }
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;