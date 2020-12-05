import React,{useState} from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import '../App.css'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


// ===========================°°°°°°°°°°°°°°°°°°°°°°°°==============================
//                                    Styling
// ===========================°°°°°°°°°°°°°°°°°°°°°°°°==============================


const useStyles = makeStyles((theme) => ({


text: {
  fontSize:14,
  fontWeight:500
},


heading :{
    fontSize:24,
    fontWeight:600,
    marginTop:"46px"
},


mail:{
    float:"right",
    marginRight:"40px",
    fontSize:14
},


specButton:{
    border:"none",
    backgroundColor:"white",
    padding:theme.spacing(1,3),
    boxShadow:"0 4px 8px -2px grey",
    fontSize:12.7,
    fontWeight:400,
    color:"#636363",
    "&:focus":{
        outline:'none',
    }
},

icon:{
    color: "#3ed6ed",
    marginBottom:"-7px",
    marginRight:"7px"
},


headings :{
    fontWeight:700,
    fontSize:13
},


row:{
  backgroundColor: '#f0f5f1',
},

button :{
    float:"right",
    backgroundColor: "#3ed6ed",
    textDecoration: "none",
},

buttonn :{
    backgroundColor: "#3ed6ed",
    textDecoration: "none",
    marginRight:"30px"
},



backButton:{
    color: "#13b3c2",
    textDecoration:'none',
},


line :{
    height: '1px',
    backgroundColor: 'lightgrey',
    border: 'none',
},



input:{
    width:"72%",
    padding:10,
    border:"1px solid #c7c7c7",
    borderRadius:5
},

select:{
    width:"70%",
    padding:10,
    border:"1px solid #c7c7c7",
    borderRadius:5,
    color:'grey',
    "&:focus":{
        outline:"none",
    border: "2px solid #3ed6ed",

    }
},

link:{
    textDecoration:"none"
},



}));



// ===========================°°°°°°°°°°°°°°°°°°°°°°°°==============================
//                                 Step2 Component
// ===========================°°°°°°°°°°°°°°°°°°°°°°°°==============================
function Step2(props) {

    const [addSpec, setAddSpec] = useState(false)
    const isEnabled = props.state.spec.length>0

    
function deleteRow(idx){
    props.dispatch({
        type:"recordRemoved",
        id:idx
    })
    console.log("Sent dispatch");
}    



  const classes = useStyles();

    return (
        <div>
            <Grid item container>

                <Grid item lg={3} md={3} sm={3} xs={12}>
                    <Box mt={5} ml={7}>
                        <b>@Hush</b>
                        <br />
                        <br />
                        <br />
                        <p className={classes.text}>Case details</p>
                        <p className={classes.text}>Specifications</p>
                        <p className={classes.text}>Review</p>
                    </Box>
                </Grid>

                <Grid item lg={9} md={9} sm={9} xs={12}>
                    <Box mt={5} mr={5}>
                        <b className={classes.mail}>hasheemhush@gmail.com</b>
                        <p className={classes.pages}>Dashboard | Cases</p>
                        <p className= {classes.heading}>Specifications</p>
                             <button className={classes.specButton} onClick={()=>setAddSpec(true)}><ControlPointIcon className={classes.icon}/> Add Spacifications</button> 

                        <br />
                        {addSpec===true?<Specification onAdd={()=>setAddSpec(false)} dispatch={props.dispatch} state={props.state} />:<div></div>}
                        <br />
                        <br />
                        <TableContainer>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.headings}>Vendor</TableCell>
                                        <TableCell className={classes.headings} align="left">Product</TableCell>
                                        <TableCell className={classes.headings} align="left">Technology area</TableCell>
                                        <TableCell className={classes.headings} align="left">Consultant</TableCell>
                                        <TableCell className={classes.headings} align="left">Cost per hours (USD)</TableCell>
                                        <TableCell className={classes.headings} align="left">Hours</TableCell>
                                        <TableCell className={classes.headings} align="left">Cost (USD)</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {props.state.spec.map((row , id) =>{ 
                                        console.log("Rendierng id:",id);
                                        return (
                                    <TableRow className={classes.row} key={id}>
                                        <TableCell component="th" scope="row">{row.vendor}</TableCell>
                                        <TableCell align="left">{row.product}</TableCell>
                                        <TableCell align="left">{row.technology}</TableCell>
                                        <TableCell align="left">{row.consultant}</TableCell>
                                        <TableCell align="left">150</TableCell>
                                        <TableCell align="left">2</TableCell>
                                        <TableCell align="left">350</TableCell>
                                        <TableCell align="left"><span onClick={() => { console.log("Delteeitng ", id );deleteRow(id)}}><DeleteOutlineIcon/></span></TableCell>
                                    </TableRow>
                                    );})}
                                </TableBody>
                            </Table>
                        </TableContainer>
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
                        <br />

                        <Grid item container>
                            <Grid item lg={12} md={12} sm={12} xs={12}>
                                <Link to="/step1" className={classes.link}><span className={classes.backButton}>back</span></Link>
                                <Link to="/review"><Button disabled={!isEnabled} type="submit" className={classes.button} variant="contained">next</Button></Link>
                            </Grid>
                        </Grid>
<br />
<br />
                    </Box>
                </Grid>
            </Grid>

            <Grid item container>
                <Grid item lg={12} md={12} sm={12} xs={12} className={classes.footer}>
                    <Box px={5} py={3} >
                        <hr className={classes.line}/>
                       
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}



// ===========================°°°°°°°°°°°°°°°°°°°°°°°°==============================
//                               Add specifications
// ===========================°°°°°°°°°°°°°°°°°°°°°°°°==============================



function Specification(props){

    const [vendor , setVendor] = useState('')
    const [product , setProduct] = useState('')
    const [technology , setTechnology] = useState('')
    const [consultant , setConsultant] = useState('')
    const [field , setField] = useState(0)
    const isEnabled = vendor.length > 0 && product.length>0 && technology.length> 0 && consultant.length>0
    let history = useHistory();
    const classes = useStyles();


    const submitForm = (e) => {
        e.preventDefault();
        props.dispatch({
            type: 'specSubmitted', 
            submittedData: { 
                vendor: vendor,
                product: product,
                technology: technology,
                consultant:consultant
            }
        });
        history.push('/step2');
        setVendor("")
        setProduct("")
        setTechnology("")
        setConsultant("")
        setField(0);
        props.onAdd();

    }



    return(
        <div>
            <form onSubmit={submitForm}>
                <Box mt={5}>
                    {/* <p className={classes.heading}>Add Specification</p> */}
                    <Grid item container>
                        {field >=0 ?
                        <Grid className={classes.card} item lg={3} md={3} sm={6} xs={12}>
                            <p className={classes.text}>select vendor</p>
                            {/* <input className={classes.input} value ={vendor}  onChange={e => setVendor(e.target.value)} type="text" /> */}
                            <select className={classes.select} value={vendor} onChange={e => {setVendor(e.target.value); setField(field+1)}}  >
                            <option value="" disabled selected>Select vendor</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <br />
                        </Grid>
                        :
                        <div />
                        }
                        {field >=1 ?
                        <Grid className={classes.card} item lg={3} md={3} sm={6} xs={12}>
                            <p className={classes.text}>Add product</p>
                            {/* <input className={classes.input} value ={product}   onChange={e => setProduct(e.target.value)}type="text"/> */}
                            <select className={classes.select} name="cars" id="cars" value={product} onChange={e => {setProduct(e.target.value); setField(field+2)}}  >
                                <option value="Select vendor" disabled selected>Select product</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <br />
                        </Grid>
                        :
                        <div />
                        }
                        {field >=2 ?
                        <Grid className={classes.card} item lg={3} md={3} sm={6} xs={12}>
                            <p className={classes.text}>Technology area</p>
                            {/* <input className={classes.input} value ={technology}  onChange={e => setTechnology(e.target.value)} type="text"/> */}
                            <select className={classes.select} value={technology} onChange={e => {setTechnology(e.target.value); setField(field+3)}}  >
                            <option value="" disabled selected>Select technology</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <br />
                        </Grid>
                        : 
                        <div />
                        }
                        {field >=4 ?
                        <Grid className={classes.card} item lg={3} md={3} sm={6} xs={12}>
                            <p className={classes.text}>consultant</p>
                            {/* <input className={classes.input} value ={consultant} onChange={e => setConsultant(e.target.value)} type="text"/> */}
                            <select className={classes.select} name="cars" id="cars" value={consultant} onChange={e => {setConsultant(e.target.value)}}  >
                            <option value="" disabled selected>Select consultant</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <br />
                        </Grid>
                        : <div />
                        }
                    </Grid>
                    <br />
                    <Button disabled={!isEnabled} type="submit" className={classes.button} variant="contained">Add vendor</Button>
                    {/* <Link to="/step2" className={classes.link}><span className={classes.backButton}>Back</span></Link> */}
                
                </Box>

 
            </form>
        </div>
    )
}
export {
 Step2,
 Specification
}


