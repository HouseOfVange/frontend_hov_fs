import React from "react";
import './Price.css'


const Price = ({setSelectedPrice, setShowOrderForm, daPrice,}) => {

    const handleClick = () => {
        setSelectedPrice(daPrice);
        setShowOrderForm(false);
    }

    return (
        <section
            className="price" 
            onClick={handleClick}
        >
            {daPrice} 
        </section>
    );
};

export default Price;
