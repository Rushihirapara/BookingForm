import React from 'react'
import Notify from './Notify'
import Tripdate from "./Tripdate.1"
import Triptime from './Triptime'

export default function Onetrip() {
  return (
    <div>
         <fieldset className='my-2'> <legend> <h5> Pickup Date:*</h5></legend>
         
      <Tripdate/>
         </fieldset>
         <fieldset className='my-2'> <legend> <h5> Pickup Time:*</h5></legend>
         
      <Triptime />
      
         </fieldset>
         <fieldset className='my-2'> <legend> <h5> Start Locaction:*</h5></legend>
         
      <Triptime />
      
         </fieldset>
         <fieldset className='my-2'> <legend> <h5> Stop Locaction:*</h5></legend>
         
      <Triptime />
      
         </fieldset>
    
         <Notify/>
  

   
    </div>
  )
}
