// import React, { useContext, useEffect, useState } from 'react';
// import { Button, Col, Container, Form, Row } from 'react-bootstrap';
// import { Link, useParams } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCommentDots, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import { UserContext } from '../../../App';

// const Order = () => {
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//     const { id } = useParams();
//     const [servicesData, setServicesData] = useState([]);
//     useEffect(() => {
//         fetch('https://localhost:5000/services')
//             .then(res => res.json())
//             .then(data => setServicesData(data))
//     }, []);
//     const service = servicesData.find(service => service._id === id) || {};

//     const [orderInfo, setOrderInfo] = useState({});
//     const [orderFile, setOrderFile] = useState(null);
//     const handleBlur = e => {
//         const newOrderInfo = { ...orderInfo };
//         newOrderInfo[e.target.name] = e.target.value;
//         setOrderInfo(newOrderInfo);
//     };
//     const handleFileChange = e => {
//         const newOrderFile = e.target.files[0];
//         setOrderFile(newOrderFile);
//     };
//     const handleSubmit = (e) => {

//         const formData = new FormData();
//         formData.append('file', orderFile);
//         formData.append('name', orderInfo.name || loggedInUser.name);
//         formData.append('email', orderInfo.email || loggedInUser.email);
//         formData.append('serviceName', service.title || orderInfo.serviceName);
//         formData.append('details', orderInfo.details);
//         formData.append('price', orderInfo.price);
//         formData.append('icon', service.image.img);
//         fetch('http://localhost:5000/addOrder', {
//             method: 'POST',
//             body: formData
//         })
//             .then(response => response.json())
//             .then(data => {
                
//                 if (data === false) {
//                     document.getElementById('orderForm').innerHTML = '<h3 class="text-center text-success mt-5"><b>Orderd Successfully</b></h3>';
//                 }
//             })
//         e.preventDefault();
//     };
//     return (
//         <Container fluid>
//         <Row>
//             <Col md={3}>
//                 <Link to='/home'><img style={{ height: '70px', margin: '20px 0 40px 0' }} src={"http://i.ibb.co/n737P2n/logo.png"} alt="" /></Link>
//                 <div className="mt-2 ml-3">
//                     <p><Link to='/order'><FontAwesomeIcon icon={faShoppingCart} /> Order</Link></p>
//                     <p><Link to='/customer/enrolledServices'><FontAwesomeIcon icon={faShoppingBag} /> Enrolled Services</Link></p>
//                     <p><Link to='/customer/review'><FontAwesomeIcon icon={faCommentDots} /> Review</Link></p>
//                 </div>
//             </Col>
//             <Col md={9}>
//                 <Row className="my-4 pb-3">
//                     <Col><h2>Order</h2></Col>
//                     <Col><h5 className="text-right">{loggedInUser.name}</h5></Col>
//                 </Row>
//                 <Container className="mt-2 py-3" style={{ backgroundColor: "#F4F7FC", height: '600px' }}>
//                     <Form id="orderForm" onSubmit={handleSubmit} className="p-5 mr-5">
//                         <Form.Group>
//                             <Form.Control onBlur={handleBlur} name="name" size="lg" type="text" defaultValue={loggedInUser.name} placeholder="Your Name / Company's Name" required />
//                         </Form.Group>

//                         <Form.Group>
//                             <Form.Control onBlur={handleBlur} name="email" size="lg" type="email" value={loggedInUser.email} placeholder="Your Email Address" required />
//                         </Form.Group>

//                         <Form.Group>
//                             {/* <Form.Control onBlur={handleBlur} name="serviceName" size="lg" type="text" defaultValue={service.title} placeholder="Service" required /> */}
//                             <Form.Control onBlur={handleBlur} name="serviceName" size="lg" type="text"  placeholder="Service" required />
//                         </Form.Group>

//                         <Form.Group>
//                             <Form.Control onBlur={handleBlur} name="details" type="text" size="lg" as="textarea" rows="3" placeholder="Project Details" required />
//                         </Form.Group>

//                         <Row>
//                             <Col>
//                                 <Form.Group>
//                                     <Form.Control onBlur={handleBlur} name="price" size="lg" type="number" placeholder="Price" required />
//                                 </Form.Group>
//                             </Col>
//                             <Col>
//                                 <Form.Group>
//                                     <Form.File
//                                         onChange={handleFileChange}
//                                         className="position-relative form-control-lg"
//                                         required
//                                         name="file"
//                                         feedbackTooltip
//                                     />
//                                 </Form.Group>

//                             </Col>
//                         </Row>

//                         <Button variant="dark" type="submit" size="lg" >Order</Button>
//                     </Form>
//                 </Container>
//             </Col>
//         </Row>
//     </Container>
//     );
// };

// export default Order;