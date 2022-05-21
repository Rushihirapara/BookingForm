import React, { useState } from 'react'

export default function Incitylist() {
    const [car, settext] = useState();
       
      
    
    
  return (
    <div className='my-2'>
    <select className="form-select" aria-label="Default select example" value={car} onChange={(e)=>  settext(e.target.value)}>
      <optgroup label="Sedan">
          <option value='Sedan CNG Car' >   CNG</option>
          <option value=' Sedan Disal Car'>   Diesal</option>
      </optgroup>
      <optgroup label="SUV">
          <option value='SUV Inova Car'>Inova</option>
          <option value=' SUV Ertiga Car'>Ertiga  </option>
          <option value='SUV Crysta Car'>crysta</option>
      </optgroup>

      </select>
     <h4 className='my-1'>Selected car: {car}</h4>
    </div>
  )
}