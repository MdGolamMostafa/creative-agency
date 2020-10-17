import React, { useState } from 'react';
import { Button, FormControl, Navbar} from 'react-bootstrap';
import { Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../../../Home/Header/Header';
import Sidebar from '../../Sidebar/Sidebar';

const CreateAdmin = () => {
    const [admin, setAdmin] = useState({});
   
    const handleBlur = e => {
        const newInfo = { ...admin };
        newInfo[e.target.name] = e.target.value;
        setAdmin(newInfo);
    }
    let history = useHistory();
    const sendReview = (event) => {
        fetch('http://localhost:5000/createAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(admin)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    history.push("/home");
                    alert("Admin added successfully")
                } else {
                    alert("Something error happened!!")
                }
            })
        event.preventDefault();
    }
    return (
        <div  className="mx-3">
            <Navbar/>
            <Row>
                <Col md={4}>
                    <Sidebar></Sidebar>
                </Col>
                <Col md={8}>
                    <h4 className="pl-3 ">Create Admin</h4>
                    <Col md={6} className="card p-3">
                        <Form onSubmit={sendReview}>
                            <Form.Label>Email</Form.Label>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <FormControl onBlur={handleBlur} type="text" name="email" placeholder="Example@email.com" />
                            </Form.Group>
                            <Button className="px-3 mr-5" variant="success" type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Col>
            </Row>
        </div>
    );
};

export default CreateAdmin;