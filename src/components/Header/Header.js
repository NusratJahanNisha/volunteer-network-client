import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    const [event, setEvent] = useState([]);
    useEffect(() => {
        fetch(`https://whispering-fjord-15086.herokuapp.com/event`)
            .then(res => res.json())
            .then(data => setEvent(data));
    }, []
    )

    return (
        <div>
            <Navbar></Navbar> 
                {
                    event.map(event => <p style={{ boxShadow: "2px 2px 2px lightGrey", margin: "5px",color:"green",textAlign: "center" }}>{event.event}  {event.date} {event.details}</p> )
                }
            <h1 style={{ textAlign: "center" }}>I GROW BY HELPING PEOPLE IN NEED</h1>
            <input style={{ height: "38px", width: "300px", marginLeft: "400px", borderRadius: "5px" }} placeholder="Search..." type="text" /> <Button style={{}} variant="contained" color="primary">Search</Button>
        </div>
    );
};

export default Header;