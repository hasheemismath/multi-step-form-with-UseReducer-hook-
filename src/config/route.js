import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Step1 from '../components/Step1'
import {Step2} from '../components/Step2'
import {Specification} from '../components/Step2'
import Review from '../components/Review'
import Main from '../components/Main'
import Sucess from '../components/sucess'


export default function AppRouter(props) {
 return (
  <Router>
   <Route  path='/' exact component={Main} />

   <Route path='/step1'><Step1 state={props.state} dispatch={props.dispatch}/></Route>

   <Route path='/step2'><Step2 state={props.state} dispatch={props.dispatch}/></Route>
   
   <Route path='/spec'><Specification state={props.state} dispatch={props.dispatch}/></Route>

   <Route path='/review'><Review state={props.state}/></Route>

   <Route path='/success'><Sucess state={props.state}/></Route>

  </Router>
 )
}
