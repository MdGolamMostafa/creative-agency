import React, { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { UserContext} from '../../../App';
import { useState } from 'react';


const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [reviewInfo, setReviewInfo] = useState({});
    const handleBlur = e => {
        const newReviewInfo = {...reviewInfo, img: loggedInUser.img};
        newReviewInfo[e.target.name] = e.target.value;
        setReviewInfo(newReviewInfo)
    };
    const handleSubmit = e => {
        fetch('https://localhost:5000/addReview', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(reviewInfo)
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                document.getElementById('reviewForm').innerHTML = '<h3 class="text-center text-success mt-5"><b>Review Submitted Successfully</b></h3>';
            }
            })
        e.preventDefault();
    }
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <Link to='/home'><img style={{ height: '70px', margin: '20px 0 40px 0' }} src={"http://i.ibb.co/n737P2n/logo.png"} alt="" /></Link>
                    <div className="mt-2 ml-3">
                        <p><Link to='/order'><FontAwesomeIcon icon={faShoppingCart} /> Order</Link></p>
                        <p><Link to='/customer/enrolledServices'><FontAwesomeIcon icon={faShoppingBag} /> Enrolled Services</Link></p>
                        <p><Link to='/customer/review'><FontAwesomeIcon icon={faCommentDots} /> Review</Link></p>
                    </div>
                </Col>
                <Col md={9}>
                    <Row className="my-4 pb-3">
                        <Col><h2>Review</h2></Col>
                        <Col><h5 className="text-right">{loggedInUser.name}</h5></Col>
                    </Row>
                    <Container className="mt-2 py-3" style={{backgroundColor: "#F4F7FC", height: '600px'}}>
                        <Form id="reviewForm" onSubmit={handleSubmit} className="p-5 mr-5">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control onBlur={handleBlur} name="name" size="lg" type="text" placeholder="Your Name" required />
                            </Form.Group>

                            <Form.Group controlId="formBasicName">
                                <Form.Control onBlur={handleBlur} name="companyName" size="lg" type="text" placeholder="Designation, Company's Name" required />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control onBlur={handleBlur} name="description" type="text" size="lg" as="textarea" rows="3" placeholder="Description" required />
                            </Form.Group>
                            <Button variant="dark" type="submit" size="lg" >Submit</Button>
                        </Form>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
    
};

export default Review;