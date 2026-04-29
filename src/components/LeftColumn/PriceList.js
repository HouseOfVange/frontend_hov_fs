import React from "react";
import './PriceList.css'
import Price from "./Price";

const PriceList = ({setSelectedPrice, setShowOrderForm}) => {

    var sumPrices = [];
    var sumPrice = 1;
    while(sumPrice <= 1414) {
        sumPrices.push(
            <Price 
                daPrice={sumPrice} 
                setSelectedPrice={setSelectedPrice}
                setShowOrderForm={setShowOrderForm}
            />
        )
        sumPrice+=1
    }

    return (
        <section className='list'>
                {sumPrices}
        </section>
    );
};

export default PriceList;
