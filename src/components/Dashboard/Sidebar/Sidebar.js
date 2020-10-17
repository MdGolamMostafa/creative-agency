import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
        faShoppingCart,
        faLuggageCart,
        faCommentDots,
        faShoppingBag,
        faPlus,
        faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { UserContext } from "../../../App";

const Sidebar = () => {
        const [loggedInUser, setLoggedInUser] = useContext(UserContext);
        const [isAdmin, setIsAdmin] = useState(null);

        useEffect(() => {
            fetch("http://localhost:5000/isAdmin", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email: loggedInUser.email }),
            })
            .then((res) => res.json())
            .then((data) => setIsAdmin(data));
        }, []);

        const [isUser, setIsUser] = useState(null);

        useEffect(() => {
            fetch("http://localhost:5000/isUser", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email: loggedInUser.email }),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setIsUser(data);
            })
        }, []);

        return (
            <Container className="ml-5 mt-5">
            { 
                <div>
                <Link to="/order" className="activeColor">
                    <FontAwesomeIcon icon={faShoppingCart} /> Order
                </Link>{" "}
                <br /> <br />
                <Link to="/serviceList" className="activeColor">
                    <FontAwesomeIcon icon={faCommentDots} /> Service List
                </Link>{" "}
                <br /> <br />
                <Link to="/review" className="activeColor">
                    <FontAwesomeIcon icon={faShoppingBag} /> Review
                </Link>{" "}
                <br /> <br />
                </div>
            }
            {
                isAdmin &&<div>
                <Link to="adminServiceList" className="activeColor">
                    <FontAwesomeIcon icon={faLuggageCart} /> Service List
                </Link>{" "}
                <br /> <br />
                <Link to="addService" className="activeColor">
                    <FontAwesomeIcon icon={faPlus} /> Add Service
                </Link>{" "}
                <br /> <br />
                <Link to="makeAdmin" className="activeColor">
                    <FontAwesomeIcon icon={faUserPlus} /> Make Admin
                </Link>
                </div>
            }
            </Container>
        );
        };

export default Sidebar;
