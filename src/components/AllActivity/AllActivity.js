import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import RegisteredActivity from '../RegisteredActivity/RegisteredActivity';


const AllActivity = () => {
    const [register, setRegister] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(register);

    useEffect(() => {
        fetch(`https://whispering-fjord-15086.herokuapp.com/activity?email=` + loggedInUser.email)
            .then(res => res.json())
            .then(data => setRegister(data));
    }, [])
    return (
        <div>       
            <Navbar></Navbar>
            <h3>You have: {register.length}</h3>
            
                {

                    register.map(register => <RegisteredActivity register={register}> </RegisteredActivity> )
                }

         </div>
    );
};

export default AllActivity;