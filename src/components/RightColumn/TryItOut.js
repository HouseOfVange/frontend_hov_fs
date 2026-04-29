import React from "react";

const TryItOut = ({ stickerPrice, simulationPrice, setSimulationPrice, showSimulator, setShowSimulator }) => {

    const handleClick = () => {
        if (showSimulator) {
        setShowSimulator(false) 
        setSimulationPrice(stickerPrice)
        } else { 
        setShowSimulator(true);
        }
    }

    const handleAddMore = () => {
        setSimulationPrice(simulationPrice + 1);
    }

    return (
        <section className="tryitout">
            ACTIVATE THE SIMULATOR
            <button 
            onClick={handleClick}
            > 
                {showSimulator ? "stop it!!!" : "try it"}
                </button>

                {showSimulator ? <button onClick={handleAddMore}>
                add MORE!!!!
                </button> : <></>}
                {simulationPrice}
        </section>
    );
};

export default TryItOut;
