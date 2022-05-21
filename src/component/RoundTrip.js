import React, { Component } from 'react'
import Tripdate from './Tripdate.1'
import Triptime from './Triptime'
export default class RoundTrip extends Component {
  render() {
    return (
      <div>
              <fieldset className='my-2'> <legend> <h5> Pickup Date:*</h5></legend>
         
         <Tripdate/>
            </fieldset>
            <fieldset className='my-2'> <legend> <h5> Pickup Time:*</h5></legend>
            
         <Triptime />
         
            </fieldset>
            <fieldset className='my-2'> <legend> <h5> Drop Date:*</h5></legend>
         
         <Tripdate/>
            </fieldset>
            <fieldset className='my-2'> <legend> <h5> Drop Time:*</h5></legend>
            
         <Triptime />
         
            </fieldset>
      </div>
    )
  }
}
