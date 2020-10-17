import React, { useContext, useState } from 'react';
import { Button,  Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

const Order = () => {
    
 const history = useHistory();
 const [loggedInUser, SetLoggedInUser] = useContext(UserContext);
 const [info, setInfo] = useState({});
 const [file, setFile] = useState(null);
 const sendData = (event) => {
		const formData = new FormData()
		formData.append('file', file);
		formData.append('name', loggedInUser.name);
		formData.append('email', loggedInUser.email);
		formData.append('title', loggedInUser.title);
		formData.append('price', info.price);
		formData.append('description', info.description);
		fetch('http://localhost:5000/addOrder', {
				method: 'POST',
				body: formData
			})
				.then(res => res.json())
				.then(result => {
					if (result) {
						history.push("/home");
						alert("Successfully added")
					} else {
						alert("Something wrong happened")
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
        <div  >
            <h4 className="ml-3">Order</h4>
				<div className="col-8 p-3 mr-2">
					<Form onSubmit={sendData}>
						<Form.Group controlId="exampleForm.ControlInput1">
							<Form.Control onBlur={handleBlur} type="text" name="name" placeholder="Your Name" value={loggedInUser.name} />
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlInput1">
							<Form.Control onBlur={handleBlur} type="email" name="email" placeholder="Your Email" value={loggedInUser.email} />
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlInput1">
							<Form.Control onBlur={handleBlur} type="text" name="title" placeholder="Graphics Design" value={loggedInUser.title} />
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Control onBlur={handleBlur} as="textarea" rows="3" name="description" placeholder="Project Details" />
						</Form.Group>
						
						<div className = "row">
							<div className="col-4">
									<Form.Control onBlur={handleBlur} placeholder="Price" type="text" name="price" />
							</div>
							<div className="col-1">
								<Form.Group>
									<Form.File onChange={handleFileChange} />
								</Form.Group>
							</div>
						</div>
						<Button className="px-3 mr-5" variant="dark" type="submit">Send</Button>
					</Form>
				</div>
        </div>
    ); 
}; 

export default Order;