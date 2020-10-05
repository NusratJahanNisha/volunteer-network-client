import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import firebaseConfig from './firebase.config';
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const signInLogo = [{
        googleLogo: "https://i.ibb.co/92DQtQV/google.png"
    }]

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {

        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function (result) {
            const { displayName, email } = result.user;
            const userInfo = {
                name: displayName,
                email: email
            }
            setLoggedInUser(userInfo);
            history.replace(from);
        }).catch(function (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
            console.log(errorCode, errorMessage, email, credential);
        });
    }

    return (
        <div className="container" >
            <img style={{ height: "70px", marginLeft: "460px", marginTop: "10px" }} src="https://i.ibb.co/3RFFjN2/Group-1329.png" alt="" />
            <div style={{ height: '400px', width: '800px', border: '1px solid grey', padding: '100px', marginLeft: '200px',         marginTop: "100px" }}>
                <h2 style={{ textAlign: "center" }}>Login With </h2>
                <div onClick={handleGoogleSignIn} style={{ height: '50px', width: '500px', borderRadius: '40px', border: '1px solid black', textAlign: 'center', padding: '8px', cursor: 'pointer', marginLeft: '50px', marginTop: "50px" }}> <img style={{ borderRadius: "50%", height: '30px', width: '30px' }} src={signInLogo[0].googleLogo} alt="" /> Continue with Google</div>
                <h5 style={{ textAlign: "center", padding: "10px" }}>Don't have an account? <a href="#">Create an account</a> </h5>
            </div>
        </div>
    );
};

export default Login;