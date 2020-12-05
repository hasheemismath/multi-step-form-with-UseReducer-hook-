import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";



// ===========================°°°°°°°°°°°°°°°°°°°°°°°°==============================
//                                    Styling
// ===========================°°°°°°°°°°°°°°°°°°°°°°°°==============================



const useStyles = makeStyles((theme) => ({



 paper: {
  marginTop: theme.spacing(16),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
 },



 heading: {
  backgroundColor: '#5089a3',
  width: '100%',
  padding: 18,
  paddingLeft: 28,
  fontSize: 31,
  fontWeight: 200,
  color: "white",
  margin: 0
 },



 cardBody: {
  width: '98%',
  backgroundColor: '#f0f5f1',
  padding: 25,
  paddingLeft: 35,
  fontWeight: 500
 },



 price: {
  fontSize: 32,
  fontWeight: 600
 },



 button: {
  backgroundColor: "#3ed6ed",
  textDecoration: "none",
  marginTop: theme.spacing(4),
  fontSize: 12,
  fontWeight: 600
 },



 link: {
  textDecoration: 'none'
 }
}));




// ===========================°°°°°°°°°°°°°°°°°°°°°°°°==============================
//                                 Main Component
// ===========================°°°°°°°°°°°°°°°°°°°°°°°°==============================


export default function Main() {
 const classes = useStyles();

 return (

  <Grid item container>
   <Grid item lg={3} md={3} sm={2}></Grid>


   <Grid item lg={6} md={6} sm={8} xs={12}>


    <div className={classes.paper}>
     <p className={classes.heading}>Start here</p>
     <div className={classes.cardBody}>
      
      <p>Start the form here </p>
     
      <Link to="/step1" className={classes.link}><Button variant="contained" className={classes.button}>
       Start
      </Button></Link>
     </div>
    </div>
    

   </Grid>


   <Grid item lg={3} md={3} sm={2}></Grid>
  </Grid>

 );
}