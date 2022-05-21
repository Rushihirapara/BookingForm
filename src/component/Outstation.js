import React , { useState } from 'react'
import Triptype from './Triptype';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Outstation() {
  const [car, settext] = useState();
    const notify = () => toast('1');  
      
    
    
  return (
    <div>
    <select className="form-select" aria-label="Default select example" value={car} onChange={(e)=>  settext(e.target.value)}>
      <optgroup label="Sedan">
          <option value='Sedan CNG Car' upclick={notify} >   CNG </option><ToastContainer />
          <option value=' Sedan Disal Car'onClick={notify}>   Diesal </option><ToastContainer />
      </optgroup>
      <optgroup label="SUV">
          <option value='SUV Inova Car'onClick={notify}>Inova</option><ToastContainer />
          <option value=' SUV Ertiga Car'onClick={notify}>Ertiga  </option><ToastContainer />
          <option value='SUV Crysta Car'onClick={notify}>crysta </option><ToastContainer />
      </optgroup>
     </select>
     
     <h4 className='my-1'>Selected car: {car}</h4>
    <Triptype/>
    
    </div>
  )
}
