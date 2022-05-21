import React, { Component } from 'react'
import Incitylist from './Incitylist';
import Onetrip from './Onetrip';

export default class Incitylocal extends Component {
    constructor(props) {
        super(props);

        this.state = { value: '' }
    }
    onchange = e => {
        this.setState({ value: e.target.value });
    }
    render() {
        const { value } = this.state;
        return (
            <div>
                <Incitylist />
                <div class="form-check-inline mx-3">
                    <input class="form-check-input" type="radio" onChange={this.onchange}name="exampleRadios" id="exampleRadios1" value="1" />
                        <label class="form-check-label" for="exampleRadios1">  Airport</label>
                        
                </div>
                <div class="form-check-inline mx-3">
                    <input class="form-check-input" type="radio" onChange={this.onchange}name="exampleRadios" id="exampleRadios1" value="1" />
                        <label class="form-check-label" for="exampleRadios1">  Railway Station</label>
                       
                </div>
                <div class="form-check-inline mx-3">
                    <input class="form-check-input" type="radio" onChange={this.onchange}name="exampleRadios" id="exampleRadios1" value="1" />
                        <label class="form-check-label" for="exampleRadios1">  Other</label>
                      
                </div>
                {value === '1' && (
                        <Onetrip />)}
                        


            </div>
        )
    }
}
