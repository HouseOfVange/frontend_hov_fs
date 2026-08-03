import React from "react";
import './PriceSticker.css'

const PriceSticker = (props) => {

    function showAnAlert() {
        alert('yas buy me!')
    }

    const handleClick = () => {
        props.setShowOrderForm(true)
        showAnAlert()
    }

    return (
    <section 
        className="corner_sticker"
        onClick={handleClick}
    >
        <svg className="stars"
            id="svgelem" 
            width="200" 
            height="200" 
        >
            <polygon 
                className="largerstar"
                points="100,10 40,180 190,60 10,60 160,180" 
            />
            <polygon 
                className="smallerstar"
                points="100,25 45,170 170,65 25,65 150,160" 
            />
            <svg 
                className="archedText"  
                width="190" 
                height="160"
            >
            </svg>
            <text
                x="100"
                y="105"
                textAnchor="middle"
                fontSize="35"
                fill="black"
            >
                ${props.stickerPrice}
            </text>
        </svg>
    </section>
    );
};

export default PriceSticker;