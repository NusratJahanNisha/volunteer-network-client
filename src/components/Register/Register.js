import React, { useContext, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
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

const Register = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { register, handleSubmit, watch, errors } = useForm();

  const handleDateChange = (date) => {
    const newDate = { ...selectedDate }
    newDate = date;
    setSelectedDate(newDate);
  };
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { activityName, activityImage } = useParams()
  const history = useHistory()


  const onSubmit = data => {
    history.push("/allActivity");

    const newRegisteredActivity = { ...data, selectedDate, activityImage }
    console.log(newRegisteredActivity);
    console.log(activityImage,activityName)

    fetch("https://whispering-fjord-15086.herokuapp.com/addNewUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRegisteredActivity)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  };

  return (
    <div className="container" >
      
      <img style={{ height: "70px", marginLeft: "460px", marginTop: "10px" }} src="https://i.ibb.co/3RFFjN2/Group-1329.png" alt="" />
      <div style={{ height: '600px', width: '500px', border: '1px solid grey', padding: '100px', marginLeft: '300px', marginTop: "100px" }}>
        <h3 style={{ textAlign: "center" }}>Register as Volunteer</h3>

        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
          <input name="name" style={{ margin: '10px', width: '300px', height: '40px' }} defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
          {errors.name && <span className="error" style={{ color: "red", margin: "5px" }} >Name is required </span>}

          <input name="email" style={{ margin: '10px', width: '300px', height: '40px' }} defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
          {errors.email && <span className="error" style={{ color: "red", margin: "5px" }}>Email is required</span>}

          <input name="description" style={{ margin: '10px', width: '300px', height: '40px' }} ref={register({ required: true })} placeholder="Your Description" />
          {errors.description && <span className="error" style={{ color: "red", margin: "5px" }}>Description is required</span>}

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                name="Date"
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Registered Date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>

          <input name="activity" style={{ margin: '10px', width: '300px', height: '40px' }} defaultValue={activityName} ref={register({ required: true })} placeholder="Your Activity Name" />
          {errors.email && <span className="error" style={{ color: "red", margin: "5px" }}>Activity is required</span>}

          <input style={{ margin: '10px', width: '300px', height: '40px', color: "white", backgroundColor: "blue" }} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Register;