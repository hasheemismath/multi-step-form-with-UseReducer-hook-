import React, {useState} from 'react'
import '../App.css'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";



// ===========================°°°°°°°°°°°°°°°°°°°°°°°°==============================
//                                    Styling
// ===========================°°°°°°°°°°°°°°°°°°°°°°°°==============================



const useStyles = makeStyles((theme) => ({

pages: {
  fontSize:'14.5px',
  fontWeight:500
},


heading :{
  fontSize:24,
  marginTop:"46px"
},


input :{
  width:'57%',
  border:"1px solid #a8a8a8",
  padding:"8px",
  borderRadius:5,
  "&:focus":{
    border: "2px solid #3ed6ed",
outline:'none'
  }
},


root: {
  padding:theme.spacing(3,2),
},


paper:{
  backgroundColor: '#f8f8f8',
  boxShadow:"0 6px 9px -2px #c8c8c8",
  paddingLeft:18,
  paddingRight:18,
  paddingBottom:18
},


button :{
  float:"right",
  backgroundColor: "#3ed6ed",
  textDecoration: "none",
},

mail:{
  float:"right",
  marginRight:"40px",
  fontSize:14
},


select:{
  width:"24%",
  padding:10,
  border:"1px solid #c7c7c7",
  borderRadius:5,
  color:'grey',
  "&:focus":{
    outline:"none",
    border: "2px solid #3ed6ed",
  }
},


calender :{
  width:"36%",
  padding:10,
  border:"1px solid #c7c7c7",
  borderRadius:5,
  color:'grey',
  fontSize:15,
  "&:focus":{
    outline:"none",
    border: "2px solid #3ed6ed",
  }
},


backButton:{
  textDecoration:'none',
  color: "#13b3c2",
},


line :{
  height: '1px',
  backgroundColor: 'lightgrey',
  border: 'none',
},


link:{
  textDecoration:'none'
},


footer:{
  position:"absolute",
  botton:10,
  width:"100%"
}


}));



// ===========================°°°°°°°°°°°°°°°°°°°°°°°°==============================
//                                 Step1 Component
// ===========================°°°°°°°°°°°°°°°°°°°°°°°°==============================


export default function Step1(props) {



  const [title , setTitle] = useState(Object.keys(props.state.stepOne).length == 0  ? "" : props.state.stepOne.title)

  const [description , setDescription] = useState(Object.keys(props.state.stepOne).length == 0 ? "" : props.state.stepOne.description)

  const [time , setTime] = useState(Object.keys(props.state.stepOne).length == 0  ? "" : props.state.stepOne.time)
  
  const [from , setFrom] = useState(Object.keys(props.state.stepOne).length == 0  ? "" : props.state.stepOne.from)
  
  const [to , setTo] = useState(Object.keys(props.state.stepOne).length == 0  ? "" : props.state.stepOne.to)
  
  const history = useHistory();
  
  const classes = useStyles();

  // const isEnabled = title.length > 0 && description.length>0 && time.length> 0 && from.length>0 && to.length>0
  const isEnabled = title.length > 0 && ( time == "Immediate" || ( time == "Scheduled" &&  from.length>0 && to.length>0 ))



    const submitForm = (e) => {
      e.preventDefault();
        props.dispatch({
          type: 'stepOneSubmitted', 
          submittedData: { 
            title: title,
            description : description,
            time:time,
            from:from,
            to:to,
          }
        });
        history.push('/step2');
    }



  return (
    <div className="step1">
      <form onSubmit={submitForm}>
        <Grid item container>


          <Grid item lg={3} md={3} sm={3} xs={12}>

            <Box mt={5} ml={7}>
              <b>@Hush</b>
              <br />
              <br />
              <br />
              <p className={classes.pages}>Case details</p>
              <p className={classes.pages}>Specifications</p>
              <p className={classes.pages}>Review</p>
            </Box>

          </Grid>


          <Grid item lg={9} md={9} sm={9} xs={12}>
           
            <Box mt={5}>
              <b className={classes.mail}>hasheemhush@gmail.com</b>
              <p className={classes.pages}>Dashboard | Cases</p>


              <p className= {classes.heading}>Case Details</p>


              <p className= {classes.pages}>Title</p>
              <input className= {classes.input} type="text" value={title} onChange={e => setTitle(e.target.value)}/>
              <br/>
              <br />


              <p className= {classes.pages}>Description (Optional)</p>
              <textarea className= {classes.input} cols="50" rows="6" value={description} onChange={e => setDescription(e.target.value)}></textarea>
              <br />
              <br />


              <p className= {classes.pages}>How soon the technical resources are required?</p>
              <input type="radio" value='Immediate' onChange={e => setTime(e.target.value)} name="time" /> Immediate
              <input type="radio" value='Scheduled' onChange={e => setTime(e.target.value)} name="time" /> Scheduled
              <br />
              <br />



              {
              time == "Scheduled"
              ?
              <Grid item container>
                <Grid item lg={8} md={9} sm={12} xs={12} className={classes.paper}>
                  <p className={classes.pages}>Scheduled times</p>
                  <Grid item container>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                      <p className={classes.pages}>From</p>
                      <input type="date"  value={from} onChange={e =>setFrom(e.target.value)} className={classes.calender} />
                    </Grid>


                    <Grid item lg={6} md={6} sm={6} xs={6}>
                      <p className={classes.pages}>To</p> 
                      <input type="date" value ={to} onChange={e => setTo(e.target.value)} className={classes.calender} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              :
                <div />
              }




              <br />
              <br />
              <br />
              <br />
              <br />

              <Grid item container>
                <Grid item lg={8} md={9} sm={12} xs={12}>
                  <Link to="/" className={classes.link}><span className={classes.backButton}>back</span></Link>
                  <Button disabled={!isEnabled} type='submit' className={classes.button} variant="contained" >next</Button>
                </Grid>
              </Grid>


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
      </form>

      <br />
      <br />
    </div>
  )
}