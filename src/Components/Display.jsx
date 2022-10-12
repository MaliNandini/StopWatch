import React from 'react'

function Display(props) {
  const h= () =>{
    if(props.time.h === 0 ){
      return '';
    }else {
      return <span>{(props.time.h>= 0)? props.time.h : "0" + props.time.h} :</span>
    }
  }
  return (
    <div className='mt-5'>
      {h()}&nbsp;
      <span>{(props.time.m>= 0)? props.time.m : "0" + props.time.m}</span>&nbsp;:&nbsp;
      <span>{(props.time.s>= 0)? props.time.s : "0" + props.time.s}</span>&nbsp;:&nbsp;
      <span>{(props.time.ms>= 0)? props.time.ms : "0" + props.time.ms}</span>&nbsp;&nbsp;
    </div>
  )
}

export default Display
