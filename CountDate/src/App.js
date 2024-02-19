import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
function App() {
 const [step,setStep]= useState(1);
 const [count,setCount]=useState(0);
 function handleStepplus(){
  setStep((c)=>c+1);
}
function handleStepsub(){
  setStep((c)=>c-1);
}



function handlePlus(){
  
  setCount((c)=>c + step);
}
function handleSub() {
  setCount((c)=>c-step);
}

 return<>
  <Step step={step} handleStepplus={handleStepplus} handleStepsub={handleStepsub}/>
  <Count count={count} handlePlus={handlePlus} handleSub={handleSub}/>
  <Main count={count} />
 </>

}
function Step({step,handleStepplus,handleStepsub}){
  return <div className='step'>
    <button onClick={handleStepsub}>-</button>
    <div>Step: {step}</div>
    <button onClick={handleStepplus}>+</button>
  </div>
}
function Count({count,handlePlus,handleSub}){
  return <div className='count'>
    <button onClick={handleSub}>-😘</button>
    <div>Count: {count}</div>
    <button onClick={handlePlus}>+</button>
  </div>
}
function Main({count}) {
  const d = new Date();
  d.setDate(d.getDate() + count);
  if(count===0)
 return <div className='main'>Today is {d.toDateString()}</div>
 else
 return (count>0?(<div className='main'>{count} from today is {d.toDateString()} </div>):(<div className='main'>{count*-1} before today is {d.toDateString()}</div>))
}


export default App;