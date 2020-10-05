import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Navbar from '../Navbar/Navbar';
import { Button } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const RegisteredActivity = (props) => {
    const { activity, selectedDate, email, _id } = props.register;
    const classes = useStyles();
    
    return (
        <div className="container" >
           
                         <div className={classes.root} style={{margin:"30px"}}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase className={classes.image}>

                                    <img className={classes.img} alt="complex" src="https://i.ibb.co/qnQ3jD8/babySit.png" />

                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>

                                        <Typography gutterBottom variant="subtitle1">

                                            <b>{activity} </b>

                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            <b>{selectedDate}</b>

                                        </Typography>

                                        <Typography variant="body2" gutterBottom>

                                            <b>{email}</b>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" style={{ cursor: 'pointer', marginLeft: "180px" }}>
                                            <Button variant="contained"  >Cancel</Button>
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
                </div>

    );
};

export default RegisteredActivity;