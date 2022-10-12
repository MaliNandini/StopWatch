import React from 'react'
import { useState } from 'react'
import Button from './Button'
import Display from './Display'


function Stopwatch() {
  const [time,setTime] = useState({m:59,s:50,ms:0,h:0})
  const [interv , setInterve] = useState();
  const [status , setStatus] = useState(0);  

  const start = ()=>{
   run();
   setStatus(1);
   setInterve (setInterval(run,10));
  }

  var updatedM = time.m, updateds = time.s, updatedMs = time.ms, updatedH = time.h ;
const run =() =>{
  if(updatedM === 60){
    updatedH++;
    updatedM=0;
  }
  if(updateds === 60){
    updatedM++;
    updateds = 0;
  }
  if(updatedMs === 100){
    updateds++;
    updatedMs = 0;
  }
  updatedMs++;
  return setTime({m:updatedM, s:updateds, ms:updatedMs, h:updatedH})
}


 const stop = ()=>{
 clearInterval(interv)
 setStatus(2);
  }

  
 const reset = ()=>{
  clearInterval(interv)
  setStatus(0);
  setTime({m:0,s:0,ms:0,h:0})
   }

   const resume = ()=>{
    start();
     }

    
  return (
    <div>
     <Display time={time} />
     <Button reset={reset} resume={resume} start={start} status={status} stop={stop}/>
      
    </div>
  )
}

export default Stopwatch
