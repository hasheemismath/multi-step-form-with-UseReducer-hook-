import React, {useReducer} from 'react'
import {initialState , reducer} from './config/Reducer'
import AppRoute from './config/route'


export default function App() {
const [state, dispatch] = useReducer(reducer , initialState)
 return (
  <div>
   <AppRoute state={state} dispatch={dispatch}/>
  </div>
 )
}
