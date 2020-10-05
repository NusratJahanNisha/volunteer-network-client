import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const Event = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const { register, handleSubmit, watch, errors } = useForm();


    const onSubmit = data => {    
        const newEvent = { ...data}
        fetch(`http://localhost:5000/addEvent`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newEvent)
        })
          .then(res => res.json())
          .then(data => {
            alert("Event created successfully.Everyone will see it on home page.Visit home page to see your event")
          })
      };


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3" style={{ boxShadow: "2px 2px 2px lightGrey", height: "100vh" }}>
                    <div>
                        <img style={{ height: "70px", marginTop: "10px" }} src="https://i.ibb.co/3RFFjN2/Group-1329.png" alt="" />
                    </div>
                    <b>
                        <p style={{ marginTop: "30px" }} ><img style={{ height: "15px" }} src="https://i.ibb.co/wzrb6nR/users-alt-1.png" alt="" /> Volunteer registered list</p>
                        <p ><img style={{ height: "15px" }} src="https://i.ibb.co/DtNyZPP/plus-1.png" alt="" /> Add event</p>
                    </b>
                </div>

                <div className="col-md-9"> <h5 style={{ textAlign: "center", margin: "40px" }}>
                    <b >Add Event</b></h5>
                    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                        <input name="event" type="text" style={{ marginLeft: '270px', marginTop: "10px", width: '300px', height: '40px' }} ref={register({ required: true })} placeholder="Event Title" />
                        {errors.event && <span className="error" style={{ color: "red", margin: "5px" }} >event is required </span>}

                        <input name="date" type="date" style={{ marginLeft: '270px', marginTop: "10px", width: '300px', height: '40px' }} ref={register({ required: true })} placeholder="Event Date" />
                        {errors.date && <span className="error" style={{ color: "red", margin: "5px" }} >date is required </span>}

                        <input name="details" type="text" style={{ marginLeft: '270px', marginTop: "10px", width: '300px', height: '40px' }} ref={register({ required: true })} placeholder="Your Details" />
                        {errors.details && <span className="error" style={{ color: "red", margin: "5px" }}>Details is required</span>}<br/>

                        <input style={{ marginLeft: '270px', marginTop: "10px", width: '300px', height: '40px', color: "white", backgroundColor: "blue" }} type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Event;