import React from 'react'
import '../App.css'
import { BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';



// ===========================°°°°°°°°°°°°°°°°°°°°°°°°==============================
//                                    Styling
// ===========================°°°°°°°°°°°°°°°°°°°°°°°°==============================



const useStyles = makeStyles((theme) => ({

text:{
  fontWeight:500,
  fontSize:14,
},


text1:{
  fontWeight:500,
  fontSize:14,
  marginRight:"40px"
},

heading :{
   fontWeight:600,
   fontSize:24,
},

line :{
   backgroundColor: 'lightgrey',
   height: '1px',
   border: 'none',
},


mail:{
   float:"right",
   marginRight:"40px",
   fontSize:14
},

button :{
   float:"right",
   backgroundColor: "#3ed6ed",
   textDecoration: "none",
   marginRight:"40px"
},


backButton:{
   textDecoration:'none',
   color: "#13b3c2",
},



link:{
   textDecoration:"none"
}
}));



// ===========================°°°°°°°°°°°°°°°°°°°°°°°°==============================
//                                 review Component
// ===========================°°°°°°°°°°°°°°°°°°°°°°°°==============================



export default function success(props) {
   const classes = useStyles();


   
      return(
         <Grid item container>
            <Grid item lg={3} md={3} sm={3} xs={12}>
               <Box mt={5} ml={7}>
                  <b></b>
                  <br />
                  <br />
                  <br />
                  <p className={classes.text}></p>
                  <p className={classes.text}></p>
                  <p className={classes.text}></p>
               </Box>
            </Grid>

            <Grid item lg={9} md={9} sm={9} xs={12}>
               <Box mt={5}>
                  <b className={classes.mail}>hasheemhush@gmail.com</b>
                  
                  <p className= {classes.heading}>Form Data</p>

                  <b>Title</b>
                  <p className={classes.text}>{props.state.stepOne.title}</p>

                  <b>Description</b>
                  <p className={classes.text}>{props.state.stepOne.description}</p>

                  <b>Show soon the technical resourse are required</b>
                  <p className={classes.text}>{props.state.stepOne.time}</p>
                  <span className={classes.text}>{props.state.stepOne.from} - </span>
                  <span className={classes.text}>{props.state.stepOne.to}</span><br /><br />

                  <b>Specifications</b><br /><br />
                  {props.state.spec.map((row)=>(
                     <>
                        <TableRow className={classes.row}>
                           <TableCell component="th" scope="row">{row.vendor}</TableCell>
                           <TableCell align="left">{row.product}</TableCell>
                           <TableCell align="left">{row.technology}</TableCell>
                           <TableCell align="left">{row.consultant}</TableCell>
                        </TableRow>
                     </>
                  ))}

                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
               </Box>
            </Grid>


            <Grid item container>
               <Grid item lg={12} md={12} sm={12} xs={12} className={classes.footer}>
                  <Box px={5} py={3}>
                     <hr className={classes.line}/>
                    
                  </Box>
               </Grid>
            </Grid>

         </Grid>

   )
}
