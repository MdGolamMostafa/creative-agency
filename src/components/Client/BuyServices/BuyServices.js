import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BuyServices.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const BuyServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https//localhost:5000/orders?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <Link to='/home'><img style={{ height: '70px', margin: '20px 0 40px 0' }} src={"http://i.ibb.co/n737P2n/logo.png"} alt="" /></Link>
                    <div className="mt-2 ml-3">
                        <p><Link to='/order'><FontAwesomeIcon icon={faShoppingCart} /> Order</Link></p>
                        <p><Link to='/customer/enrolledServices'><FontAwesomeIcon icon={faShoppingBag} /> Buy Services</Link></p>
                        <p><Link to='/customer/review'><FontAwesomeIcon icon={faCommentDots} /> Review</Link></p>
                    </div>
                </Col>
                <Col md={9}>
                    <Row className="my-4 pb-3">
                        <Col><h2>Services</h2></Col>
                        <Col><h5 className="text-right">{loggedInUser.name}</h5></Col>
                    </Row>
                    <Container className="mt-2 py-3" style={{ backgroundColor: "#F4F7FC" }}>
                        {
                            orders.length === 0 &&
                            <h4 className="my-4 text-center text-danger">Loading Buy Services....</h4>
                        }
                        <Row>
                            {
                                orders.map(order =>
                                    <Col key={order._id} md={5}>
                                        <div className="enrolled-card mx-2 my-2">
                                            <Row>
                                                <Col md={8}>
                                                    <img style={{ height: "70px" }} src={`data:image/png;base64,${order.icon}`} alt="" />
                                                </Col>
                                                <Col>
                                                    <Button className="mr-auto" variant="outline-danger">Pending</Button>
                                                </Col>
                                            </Row>
                                            <h3 className="py-2">{order.serviceName}</h3>
                                            <p>{order.details}</p>
                                        </div>
                                    </Col>
                                )
                            }
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default BuyServices;