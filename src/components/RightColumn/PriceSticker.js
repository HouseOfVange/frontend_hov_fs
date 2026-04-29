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
                {/* <p className="center"> ${props.stickerPrice} </p> */}
                <p className="center">
                {/* <span className="tinytext">next available price point is</span>
                <br /> */}
                ${props.stickerPrice}
                </p>
                <svg className="stars"
                    id = "svgelem" 
                    width = "200" 
                    height = "200" 
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
                        <path id='curve' 
                        d="M 10 80 Q 95 10 180 80"
                        fill="transparent"/>
                        <text className='arch'>
                        <textPath href='#curve'>the time to buy is now 📈</textPath>
                        </text>
                    </svg>
                </svg>
                {/* </button> */}
            </section>
    );
};

export default PriceSticker;