import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';

const Admin = () => {
    const history = useHistory()
    const handleEvent = () => {
        history.push(`/event`);
    }
    const [registeredUser, setRegisteredUser] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:5000/activityAll`)
            .then(res => res.json())
            .then(data => setRegisteredUser(data));
    }, []
    )


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3" style={{ boxShadow: "2px 2px 2px lightGrey", height: "100vh" }}>
                    <img style={{ height: "70px", marginTop: "10px" }} src="https://i.ibb.co/3RFFjN2/Group-1329.png" alt="" />
                    <b>
                        <p style={{ marginTop: "30px" }} >
                            <img style={{ height: "15px" }} src="https://i.ibb.co/wzrb6nR/users-alt-1.png" alt="" /> Volunteer registered list</p>
                        <p onClick={handleEvent} style={{ cursor: 'pointer' }}><img style={{ height: "15px" }} src="https://i.ibb.co/DtNyZPP/plus-1.png" alt="" /> Add event</p>
                    </b>
                </div>

                <div className="col-md-9"> <h5 style={{ textAlign: "center", margin: "40px" }}>
                    <b>Volunteer registered list</b></h5>
                    <div >
                        {
                            registeredUser.map(
                            register => <li style={{ boxShadow: "2px 2px 2px lightGrey", margin: "10px" }}> {register.name} -----{register.email} ----- {register.activity} -----{register.selectedDate}</li>
                            )
                        }
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Admin;