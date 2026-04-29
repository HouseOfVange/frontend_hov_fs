import './App.css';
import React from "react";
import Pedestal from "./components/RightColumn/Pedestal";
import PriceSticker from "./components/RightColumn/PriceSticker";
import AsciiLogo from "./components/AsciiLogo";
import SocialMedias from './components/Footer/SocialMedias';
import { useState } from "react";
import HOVLogoSVG from './components/HOVLOGOSVG';
import PriceList from './components/LeftColumn/PriceList';
import PiecePage from './components/CenterViewer/PiecePage';
import OrderForm from './components/CenterViewer/OrderForm';
import TryItOut from './components/RightColumn/TryItOut';
import AudioPlayer from './components/Header/Audio/AudioPlayer';
import Simulator from './components/CenterViewer/Simulator';


function App() {

  const [stickerPrice, setStickerPrice] = useState(80);
  const [selectedPrice, setSelectedPrice] = useState (stickerPrice);
  const [showOrderForm, setShowOrderForm] = useState(true);
  const [showSimulator, setShowSimulator] = useState(false);
  const [simulationPrice, setSimulationPrice] = useState(stickerPrice);

  return (
    <div className="App">
      <header>
        <AudioPlayer />
        <h1>HOUSE OF VANGE</h1>
      </header>

      <div className='grid-layout-container'>

        {/* scrollable column of ascending numbers.  */}
        <section className='price-list'>
          <PriceList 
            setSelectedPrice={setSelectedPrice}
            setShowOrderForm={setShowOrderForm}
          />
        </section>

        {/* main display area to show either information about the selected price or the order form */}
        <section className='main-viewer'>
          {showOrderForm && (showSimulator === false)? (
            <OrderForm 
              stickerPrice={stickerPrice} 
            />
          ) : showSimulator ? (
            <Simulator simulationPrice={simulationPrice}/>
          ) : (    
            <PiecePage
              stickerPrice={stickerPrice}
              selectedPrice={selectedPrice}
              setShowOrderForm={setShowOrderForm}
            />
          )}
        </section>

        
        <section className='ionic-pedestal'> 
          <PriceSticker 
            setShowOrderForm={setShowOrderForm}
            stickerPrice={stickerPrice} 
          />
          <Pedestal />
          <TryItOut 
            stickerPrice={stickerPrice}
            simulationPrice={simulationPrice}
            setSimulationPrice={setSimulationPrice}
            showSimulator={showSimulator}
            setShowSimulator={setShowSimulator}
          />
        </section>

        {/* <section className='grid-block'/> */}
        {/* <section /> */}
      </div>

      <footer>
        <SocialMedias />
      </footer>
      
    </div>
  );
}

export default App;
