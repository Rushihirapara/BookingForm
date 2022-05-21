import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function  Contectnumber() {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const notify = () => toast("Put on Indian Number");
  const [value, setValue] = useState()
  return (
    <div>
    <PhoneInput
    className='input-group mb-3'
      placeholder="Enter phone number"
      value={value}
      onClick={notify}
      onChange={setValue}
      defaultCountry="IN"
    
      />
       <ToastContainer />
      </div>
  )
}

