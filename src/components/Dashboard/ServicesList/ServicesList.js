import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from '../Sidebar/Sidebar';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';
import { faTruckLoading } from '@fortawesome/free-solid-svg-icons';
const ServicesList = () => {

    const [loggedInUser, SetLoggedInUser] = useContext(UserContext);
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://localhost:5000/getUserServices?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [])

    return (
        <div className="mx-3">
            <Navbar></Navbar>
             <div className="row">
                    <div className="col-md-4">
                            <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-8">
                        <h4 className="ml-3">All Services List</h4>
                    <Row>
                        {
                            service.length === 0 && <Col className="d-flex justify-content-center"> <div><FontAwesomeIcon icon={faTruckLoading} />Data not found</div> </Col>
                        }
                        {
                            service.map(data => <Col  md={12} lg={5} className="m-3 p-3 box">
                                <Row>
                                    <Col>
                                        <img height={100} className="p-3 mr-1" src={`data:image/png;base64,${data.image.img}`} alt="..." />
                                    </Col>
                                    <Col>
                                        <Button className="mr-3 mt-5" variant="outline-success">{data.project}</Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h5>{data.title}</h5>
                                        <p>{data.description}</p>
                                    </Col>
                                </Row>
                            </Col>)
                        }
                    </Row>
                    </div>
                    
                
            </div>
                
           
        </div>
    );
};

export default ServicesList;