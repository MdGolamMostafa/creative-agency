import React, { useState } from 'react';
import { Button, Form} from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {

     const [info, setInfo] = useState({});
     const [file, setFile] = useState(null);
     const addService = (event) => {
         const formData = new FormData()
         formData.append('file', file);
         formData.append('title', info.title);
         formData.append('description', info.description);
         fetch('http://localhost:5000/AddService', {
             method: 'POST',
             body: formData
         })
             .then(res => res.json())
             .then(data => {
                 if (data) {
                     alert('Data added successfully');
                 } 
             })
         event.preventDefault();
     }
     const handleBlur = e => {
         const newInfo = { ...info };
         newInfo[e.target.name] = e.target.value;
         setInfo(newInfo);
     }
     const handleFileChange = (e) => {
         const newFile = e.target.files[0];
         setFile(newFile);
     }

    return (
        <div  className="mx-3">
                <div className = 'row'>
                    <div className="col-md-4">
                            <Sidebar></Sidebar>
                    </div>
                            <div className = 'col-md-8'>
                                <h4>Add One Service</h4>
                                    <div className = 'col-md-8'>
                                        <Form onSubmit={addService}>
                                            <div className="row p-3">
                                                <div className = 'col-md-5'>
                                                        <Form.Group controlId="exampleForm.ControlInput1">
                                                            <Form.Label>Title</Form.Label>
                                                            <Form.Control onBlur={handleBlur} type="text" name="title" placeholder=" Title" />
                                                        </Form.Group>
                                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                                            <Form.Label>Description</Form.Label>
                                                            <Form.Control onBlur={handleBlur} type="text" as="textarea" rows="3" name="description" placeholder="Enter Description" />
                                                        </Form.Group>
                                                </div>
                                                    <div className="col-12">
                                                            <Form.Group>
                                                                <Form.File onChange={handleFileChange} label="Icon" />
                                                            </Form.Group>
                                                    </div>
                                            </div>
                                            <br />
                                            <Button className="px-3 mr-5" variant="dark" type="submit">Send</Button>
                                        </Form>
                            
                                    </div>
                            </div>
                </div>
        </div>
    );
};

export default AddService;