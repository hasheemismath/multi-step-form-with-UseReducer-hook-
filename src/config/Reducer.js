
const initialState = { stepOne :{}, stepTwo:{}, spec:[] };


function reducer(state, action) {
 switch (action.type) {
  case "stepOneSubmitted":
   return { stepOne : action.submittedData,
   stepTwo : state.stepTwo ,
   spec : state.spec
  };
  case "stepTwoSubmitted":
   return { stepOne : state.stepOne,
    stepTwo : action.submittedData,
    spec: state.spec
   };
  case "specSubmitted":
   return { stepOne: state.stepOne,
    stepTwo : state.stepTwo,
    spec: state.spec.concat(action.submittedData)
   };
   case "recordRemoved":
    let newSpec = state.spec.filter((e,i)=> i != action.id);
    console.log('idddd',action.id)
    return {stepOne:state.stepOne, 
           stepTwo:state.stepTwo,
           spec:newSpec,
          }
 }
 console.log(action.submittedData)
}


export{
 initialState,
 reducer
}