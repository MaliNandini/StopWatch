import React from 'react'

function Button(props) {
  return (

    <div className='mt-3'>
      {(props.status === 0)?
         <button onClick={props.start}  >start</button>:" "
      }
  

      {(props.status === 1)?
      <div>
       <button onClick={props.stop}  >Stop</button>&nbsp;
       <button onClick={props.reset}  >Reset</button>   
      </div>:" "
         
      }

     {(props.status === 2)?
      <div>
       <button onClick={props.resume}  >Resume</button>&nbsp;
       <button onClick={props.reset}  >Reset</button>   
      </div>:" "
         
      }
  
    </div>
  )
}

export default Button
