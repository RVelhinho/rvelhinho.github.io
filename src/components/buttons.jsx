import React, { Component } from 'react';

class Buttons extends Component {
    state = {  }
    render() { 
        return (
            <div className='row text-center'>
                <div className='col-7 col-sm-7 col-md-4'>
                    <a href="CV_Ricardo_Velhinho.pdf" download><button type='button' className='btn btn-dark btn-lg'>Download CV</button></a>
                </div>
                <div className='col-2 col-sm-1 col-md-1'>
                    <a href="mailto:ricvelhinho@gmail.com"><button type='button' className='btn btn-dark btn-lg'>Contact</button></a>
                </div>
            </div>
        );
    }
}
 
export default Buttons;