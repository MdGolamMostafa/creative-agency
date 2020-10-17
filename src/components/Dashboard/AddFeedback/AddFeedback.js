import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const AddFeedback = () => {
    const [loggedInUser, SetLoggedInUser] = useContext(UserContext);
    const [clientInfo, setClientInfo] = useState({});
    const { name, photo } = loggedInUser;
    const handleBlur = e => {
        const newInfo = { ...clientInfo, name, photo };
        newInfo[e.target.name] = e.target.value;
        setClientInfo(newInfo);
    }
    let history = useHistory();
    const sendReview = (event) => {
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(clientInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    history.push("/home");
                } 
            })
    }
    return (
        <div  className="mx-3">
            <Navbar></Navbar>
                <div className="row">
                    <div className = 'col-md-4'>
                        <Sidebar></Sidebar>
                    </div>
                    <div className = 'col-md-8'>
                        <h4 className="ml-3">Add Feedback</h4>                   
                            <div className = 'col-md-8'>
                                <Form onSubmit={sendReview}>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Control onBlur={handleBlur} type="text" name="name" placeholder="Your Name" value={name} />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlInput1">
                                        <Form.Control onBlur={handleBlur} type="text" name="position" placeholder="Your Company" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Control onBlur={handleBlur} type="text" as="textarea" name="description" rows="3" placeholder="Project Details" />
                                    </Form.Group>
                                    <Button variant="dark" type="submit">Submit</Button>
                                </Form>
                            </div>
                    </div>
                </div>
        
        </div>
    );
};

export default AddFeedback;
