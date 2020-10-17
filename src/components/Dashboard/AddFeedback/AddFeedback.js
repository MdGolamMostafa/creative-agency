import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Col, Form, Row } from 'react-bootstrap';
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
            .then(value => {
                if (value) {
                    history.push("/home");
                } else {
                    alert("Could Not Add !!")
                }
            })
        event.preventDefault();
    }
    return (
        <div  className="mx-3">
            <Navbar></Navbar>
            <Row>
                <Col md={4}>
                    <Sidebar></Sidebar>
                </Col>
                <Col md={8}>
                    <h4 className="ml-3">Add Review</h4>
                    <Col md={8} className="card p-3">
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
                    </Col>
                </Col>
            </Row>
        </div>
    );
};

export default AddFeedback;













// import React, { useContext } from 'react';
// import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';
// import { UserContext } from '../../../App';
// import Sidebar from '../Sidebar/Sidebar';

// const AddFeedback = () => {
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);

//     const {register,handleSubmit} =useForm();

//     const onSubmit = data => {
//         const newFeedback = {...loggedInUser, data: data,registrationTime: new Date()};

//         fetch('http://localhost:5000/addFeedback' , {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json'},
//             body: JSON.stringify(newFeedback)
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data) {
//                 alert('Feedback added');
//             }
            
//         })
//         .catch((error) => console.log(error));
//     }
//     return (
//         <div className = 'container-fluid'>
//             <div className = 'row'>
//                 <div className = 'col-md-3 mt-5'>
//                     <div className = 'mb-5'>
//                         <Link to="/home">
//                             <img className="img-fluid w-50" src={"http://i.ibb.co/n737P2n/logo.png"} alt="" />
//                         </Link>
//                     </div>
//                     <Sidebar/>

//                 </div>
//                 <div className = "col-md-8 mt-5">
//                     <h1 className = "font-wight-bold">Review</h1>
//                     <div className = "bg-light p-5 round mb-4">
//                         <form onSubmit={handleSubmit(onSubmit)} style = {{marginTop:'80px',width:'600px'}}>
//                             <div className = "form-group">
//                                 <input 
//                                     type ='email'
//                                     name = 'email'
//                                     value = {loggedInUser.email}
//                                     ref = {register({ required: true })}
//                                     placeholder = 'Your email' 
//                                     className = 'form-control form-control-lg'
//                                 ></input>
//                             </div>
//                             <div>
//                                 <input 
//                                     type ='text'
//                                     name = 'name'
//                                     value = {loggedInUser.name}
//                                     ref = {register({ required: true })}
//                                     placeholder = 'Your Name / Company name' 
//                                     className = 'form-control form-control-lg'
//                                 ></input>
//                             </div>
//                             <div>
//                                 <input 
//                                     type ='text'
//                                     name = 'position'                                    ref = {register({ required: true })}
//                                     placeholder = 'Your position' 
//                                     className = 'form-control form-control-lg'
//                                 ></input>
//                             </div>
//                             <div>
//                                 <input 
//                                     type ='textarea'
//                                     name = 'description'
//                                     cols = '12'                                    ref = {register({ required: true })}
//                                     rows = '4'
//                                     placeholder = 'Description area' 
//                                     className = 'form-control form-control-lg'
//                                 ></input>
//                             </div>
//                             <div>
//                                 <input 
//                                 type="submit"
//                                 className = 'btn btn-dark mt-1'
//                                 value="Submit"
//                                 ></input>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddFeedback;