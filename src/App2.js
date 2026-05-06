import './App2.css';
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import LoadingScreen from 'components/LoadingScreen';

function App2() {

  const hov_app_backend_URL = `${process.env.REACT_APP_HOV_BACKEND_URL}`;

  // SET STATES
  const [stickerPrice, setStickerPrice] = useState();
  const [loading, setLoading] = useState(true);

  // GET price sticker value
  useEffect(() => {
    axios
      .get(`${hov_app_backend_URL}/price_sticker/`)
      .then((response) => {
        setStickerPrice(response.data.next_avail_price);
      })
      .catch((err) => console.log(err));
  }, []); 


  return (
    <div className="App2">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Header />
      <main className="main-content">
        Some main content here
      </main>
      <Footer />
    </div>
  );
}

export default App2;
