import React, { useState } from "react";
import { Button, FormControl, Navbar } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";

const CreateAdmin = () => {
  const [admin, setAdmin] = useState({});

  const handleBlur = (e) => {
    const newInfo = { ...admin };
    newInfo[e.target.name] = e.target.value;
    setAdmin(newInfo);
  };
  let history = useHistory();
  const sendReviewData = (event) => {
    fetch("https://stark-plains-75469.herokuapp.com/createAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(admin),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          history.push("/home");
          alert("Admin added successfully");
        } else {
          alert("Something error happened!!");
        }
      });
    event.preventDefault();
  };
  return (
    <div className="mx-3">
      <Navbar />
      <div className="row">
        <div className="col-md-4">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-8">
          <h4 className="pl-3 ">Create Admin</h4>
          <div className="col-md-6">
            <Form onSubmit={sendReviewData}>
              <Form.Label>Email</Form.Label>
              <Form.Group controlId="exampleForm.ControlInput1">
                <FormControl
                  onBlur={handleBlur}
                  type="text"
                  name="email"
                  placeholder="Example@email.com"
                />
              </Form.Group>
              <Button className="px-3 mr-5" variant="success" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAdmin;
