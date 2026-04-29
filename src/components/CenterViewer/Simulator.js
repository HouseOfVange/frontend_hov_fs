import React from 'react';
import './Simulator.css';
import DollarGraph from './DollarGraph';
import Cube from './Cube';

const Simulator = ({simulationPrice}) => {

    return (
        <section className="simulator">
            <Cube />
            <heading className='simulatorheading'>the simulation has begun</heading>
            <br></br>
            <heading>{simulationPrice}</heading>
            <DollarGraph maxHeight={simulationPrice} />

        </section>
    );
};

export default Simulator;
