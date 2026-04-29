import React from "react"
import './Pedestal.css'
// import ped from './assets/ped.png';

const Pedestal = (props) => {

    var ped = require('../assets/ped.png')

    return (
        <section>
            <img className='theped' src={ped} alt='pedestal'/>
        </section>
    );
};

export default Pedestal;
