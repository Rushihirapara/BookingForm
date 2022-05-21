import React, { Component } from 'react'
import Onetrip from './Onetrip'
import RoundTrip from './RoundTrip';

export default class Triptype extends Component {
    constructor(props){
        super(props);

        this.state={value:''}
    }
    onchange = e=>{
        this.setState({value:e.target.value});
    }
  render() {
      const {value} = this.state;
    return (
        
        <div className='Triptype container my-3'>

        <input type="radio" className="btn-check mx-2" name="options" id="option1" value='option1' 
        onChange={this.onchange} autocomplete="off" />
            <label className="btn btn-secondary mx-2" htmlFor="option1">One Tripe</label>

            {value==='option1'&&(
                    <Onetrip/>)}
           
           <div className='my-4'> 

            <input type="radio" className="btn-check mx-2" name="options" id="option2" value='option2'
            onChange={this.onchange} autocomplete="off" />
                <label className="btn btn-secondary mx-2" htmlFor="option2">Round Trip</label>

                {value==='option2'&&(
                <RoundTrip/>)}
                </div>
            </div>
    )
  }
}

