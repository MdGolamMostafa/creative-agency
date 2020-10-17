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
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    fetch("https://stark-plains-75469.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  const [isUser, setIsUser] = useState(null);

  useEffect(() => {
    fetch("https://stark-plains-75469.herokuapp.com/isUser", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsUser(data);
      });
  }, []);

  return (
    <div className="container ml-5 mt-5">
      {
        <div>
          <Link to="/order" className="activeColor">
            <FontAwesomeIcon icon={faShoppingCart} /> Order
          </Link>
          <br /> <br />
          <Link to="/serviceList" className="activeColor">
            <FontAwesomeIcon icon={faCommentDots} /> Service List
          </Link>
          <br /> <br />
          <Link to="/review" className="activeColor">
            <FontAwesomeIcon icon={faShoppingBag} /> Review
          </Link>
          <br /> <br />
        </div>
      }
      {isAdmin && (
        <div>
          <Link to="adminServiceList">
            <FontAwesomeIcon icon={faLuggageCart} /> All Services List
          </Link>
          <br /> <br />
          <Link to="addService">
            <FontAwesomeIcon icon={faPlus} /> Add One Service
          </Link>
          <br /> <br />
          <Link to="createAdmin">
            <FontAwesomeIcon icon={faUserPlus} /> Create Admin
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
