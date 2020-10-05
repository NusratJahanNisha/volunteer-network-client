import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const history = useHistory()
    const handleAdminView = () => {
        history.push("/admin");
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light ">
                <a class="navbar-brand" href="#"> <img style={{ height: "70px" }} src="https://i.ibb.co/3RFFjN2/Group-1329.png" alt="" /> </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Donation</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Event</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#"  ><Button variant="contained" color="primary">
                                Register
                        </Button></a>
                        </li>
                        <li class="nav-item active" >
                            <a class="nav-link" ><Button onClick={handleAdminView} style={{ backgroundColor: "black", color: "white" }}>
                                Admin
                        </Button></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;