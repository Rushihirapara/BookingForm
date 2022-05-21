import React, { Component } from 'react'
import Incitylocal from './Incitylocal';
import Outstation from './Outstation';
import Rentel from './Rentel';
import bgimg from '../../src/bg.png'

export default class Rideradiobtn extends Component {
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
      <div className='grid-container'>
          <div className='grid-chind-container'>
            <h3 className='my-2 type-of-ride'>Type of Ride</h3>
            <div className="form-check my-2">
                <input className="form-check-input" type="radio" onChange={this.onchange} name="exampleRadios" id="exampleRadios1" value="Outstation"  />
                <label className="form-check-label" htmlFor="exampleRadios1">
                    <h4>Outstation</h4>
                </label>
                {value==='Outstation'&&(
                    <Outstation/> )}

            </div>
            <div className=" outstation form-check">
                <input className="form-check-input" type="radio" onChange={this.onchange} name="exampleRadios" id="exampleRadios2" value="In City" />
                <label className="form-check-label" htmlFor="exampleRadios2">
                   <h4>In City</h4> 
                </label>
                {value==='In City'&&(<Incitylocal/>)}
                
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" onChange={this.onchange} name="exampleRadios" id="exampleRadios3" value="Rentel" />
                <label className="form-check-label" htmlFor="exampleRadios3">
                    <h4>Rentel</h4>
                </label>
                {value==='Rentel'&&(<Rentel/>)}
            </div>
        </div>
        <div className='img-fluid grid-chind-container'>
            <section className='one-fourth' id='bg'>
            <img src={bgimg} alt="Tis is an immage" />
            </section>
        </div>
      </div> 
    )
  }
}




