import React from 'react'
import Autocomplete from "react-google-autocomplete";
export default function Locat() {
  return (
    <div>
    

<Autocomplete
placeholder='Enter your location'
  apiKey='AIzaSyDMwtaTz2HXTWcHyM6p7qC71rtdzKtdSWo'
  onPlaceSelected={(place) => {
    console.log(place);
  }}
/>
    </div>
  )
}
