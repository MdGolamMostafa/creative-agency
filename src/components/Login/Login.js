import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom"; 
import firebaseConfig from './firebaseConfig';
import * as firebase from "firebase/app";
import "firebase/auth"; 
import './Login.css';
const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
      const handleGoogleSignIn = () => {
            var  provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName,email}
            setLoggedInUser(signedInUser);
            history.replace(from);
            sessionStorage.getItem('token',loggedInUser.email);
            })
            
    }
    return (
        <div className = "text-center mt-5 bodySize">
            <img  style = {{height: "51px"}} className="mb-5" src={"http://i.ibb.co/n737P2n/logo.png"} alt=""/>
            <h3>Login With</h3>
        <button className = 'loginBtn loginBtn--google mt-1' onClick={handleGoogleSignIn}>Google sign in</button>
        <br/>
        <Link to="/login">Don't have an account?</Link>
       
        </div>
     
    );
};

export default Login;