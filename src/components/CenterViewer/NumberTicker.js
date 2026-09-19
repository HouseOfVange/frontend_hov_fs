import Marquee from "react-fast-marquee";
import './NumberTicker.css';

const NumberTicker = (props) => {
    
    const links = () => { 
        return Array.from({ length: 1414 }, (_, i) => i + 1).map((num) => (
            <span key={num}>
                {num < props.stickerPrice ? (
                    <a 
                        href="#" 
                        onClick={(e) => {
                            e.preventDefault();
                            props.setSelectedPiece(num);
                        }}
                    >
                        {num}
                    </a>
                ) : (
                    num
                )}
                {" ★  "}
            </span>
        ));
    }

const tickerContent = () => {
    const spaces = Math.floor(window.innerWidth / 4.3); 

    return (
        <>
            {"\u00A0".repeat(spaces)}
            {links()}
        </>
    );
}

    return (
        <div className="marquee-container">
            <Marquee
                pauseOnHover={true} 
                delay={0.5}
            >
                {tickerContent()}
            </Marquee>
        </div>
    );
};

export default NumberTicker;