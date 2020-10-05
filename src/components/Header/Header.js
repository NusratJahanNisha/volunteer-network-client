import { Button } from '@material-ui/core';
import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 style={{ textAlign: "center" }}>I GROW BY HELPING PEOPLE IN NEED</h1>
            <input style={{ height: "38px", width: "300px", marginLeft: "400px", borderRadius: "5px" }} placeholder="Search..." type="text" /> <Button style={{}} variant="contained" color="primary">Search</Button>
        </div>
    );
};

export default Header;