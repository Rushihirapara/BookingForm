import React, { Component } from 'react'
import Form from './component/Form'
import Navbar from './component/Navbar'
import './App.css';
//import Loca from './component/Loca';

export default class App extends Component {
  render() {
    return (
      <div className='backg1'>
        <Navbar/>
        <Form/>
        
     </div>
    )
  }
}
