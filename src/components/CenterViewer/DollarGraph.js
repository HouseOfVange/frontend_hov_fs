import React from 'react';
import './DollarGraph.css';
import Cube from './Cube';

const DollarGraph = ({ maxHeight }) => {
    // Generate values from 1 to maxHeight
    const values = Array.from({ length: maxHeight }, (_, index) => index + 1);

    const maxValue = Math.max(...values);

    return (
    
    <pre style={{ fontFamily: "monospace", lineHeight: "1.2em" }}>
        {values.map((value) => " ".repeat(maxValue - value) + "$".repeat(value)).join("\n")}
        </pre>
    )
}

export default DollarGraph;
