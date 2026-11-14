import './App2.css';
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import LoadingScreen from 'components/LoadingScreen';
import PriceSticker from 'components/RightColumn/PriceSticker';
import Guestbook from 'components/CenterViewer/Guestbook';
import OrderForm from 'components/CenterViewer/OrderForm';
import Gallery from 'components/CenterViewer/Gallery';
import NumberTicker from 'components/CenterViewer/NumberTicker';

function App2() {

  // Neon
  // const hov_app_backend_URL = `${process.env.REACT_APP_HOV_BACKEND_URL}`;

  // local
  const hov_app_backend_URL = `${process.env.REACT_APP_LOCAL_HOV_BACKEND_URL}`;

  // SET STATES
  const [stickerPrice, setStickerPrice] = useState();
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showGuestbook, setShowGuestbook] = useState(false);
  const [guestbookEntries, setGuestbookEntries] = useState([]);
  const [showGallery, setShowGallery] = useState(false);
  const [galleryPieces, setGalleryPieces] = useState([]);
  const [selectedPiece, setSelectedPiece] = useState(null);

  useEffect(() => {
    if (selectedPiece !== null) {
      setShowGallery(true);
      setShowOrderForm(false);
      setShowGuestbook(false);
    }
  }, [selectedPiece]);


  // PRICE STICKER PRICE STICKER PRICE STICKER PRICE STICKER PRICE STICKER PRICE
  // GET price sticker value
  useEffect(() => {
    axios
      .get(`${hov_app_backend_URL}/price_sticker/`)
      .then((response) => {
        setStickerPrice(response.data.next_avail_price);
      })
      .catch((err) => console.log(err));
  }, []);

  // GUESTBOOK GUESTBOOK GUESTBOOK GUESTBOOK GUESTBOOK GUESTBOOK GUESTBOOK GUESTBOOK
  // GET all guestbook entries 
  useEffect(() => {
    axios
      .get(`${hov_app_backend_URL}/guestbook/`)
      .then((response) => {
        setGuestbookEntries(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // PATCH add a like to a guestbook entry
  const addLike = (guestbook_entry_ID) => {
    axios
      .patch(`${hov_app_backend_URL}/guestbook/${guestbook_entry_ID}/likes`)
      .then((response) => {
        const entries = [...guestbookEntries]
        for (let entry of entries) {
          if (entry.id === guestbook_entry_ID) {
            entry.likes_count = Number(entry.likes_count) + 1
          }
        }
        setGuestbookEntries(entries)
        console.log("Like added.")
      })
      .catch((err) => console.log(err));
  }

  // POST a new guestbook entry
  const postGuestbookEntry = (author, message) => {
    return axios
      .post(`${hov_app_backend_URL}/guestbook/`, { author, message })
      .then((response) => {
        console.log("a new guestbook entry was posted.");
        const entries = [...guestbookEntries];
        entries.push(response.data);
        setGuestbookEntries(entries);
      })
      .catch((err) => console.log(err));
  }

  // PIECE GALLERY PIECE GALLERY PIECE GALLERY PIECE GALLERY PIECE GALLERY PIECE GALLERY 
  // GET all pieces all pieces for galler
  useEffect(() => {
    axios
      .get(`${hov_app_backend_URL}/pieces/`)
      .then((response) => {
        console.log("pieces retrieved.");
        setGalleryPieces(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

// ORDER FORM ORDER FORM ORDER FORM ORDER FORM ORDER FORM ORDER FORM ORDER FORM
// POST a new order
  const postOrder = (name, contact, the_time_to_buy_is_now, desire, understand_that_hov_cost_money) => {
    return axios
      .post(`${hov_app_backend_URL}/order/`, { name, contact, the_time_to_buy_is_now, desire, understand_that_hov_cost_money})
      .then((response) => {
        console.log("a new order was posted.");
      })
      .catch((err) => console.log(err));
  }

  // HANDLE HASHES HANDLE HASHES HANDLE HASHES HANDLE HASHES HANDLE HASHES HANDLE HASHES
useEffect(() => {
  const syncViewWithHash = () => {
    const hash = window.location.hash.slice(1);

    setShowGallery(hash === "gallery");
    setShowOrderForm(hash === "order-form");
    setShowGuestbook(
      hash === "guestbook" || hash.startsWith("guestbook-entry-")
    );
  };

  syncViewWithHash(); // Apply the current hash on initial load
  window.addEventListener("hashchange", syncViewWithHash);

  return () => {
    window.removeEventListener("hashchange", syncViewWithHash);
  };
}, []);

  return (
    <div className="App2">
      
      <NumberTicker stickerPrice={stickerPrice} setSelectedPiece={setSelectedPiece}/>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      <Header />
      
      <PriceSticker
          setShowGuestbook={setShowGuestbook}
          setShowOrderForm={setShowOrderForm}
          setShowGallery={setShowGallery}
          stickerPrice={stickerPrice} 
      />

      <main className="main-content">

          {!showGallery && !showOrderForm && !showGuestbook ? (
            <img src={"https://cdn.voyagela.com/wp-content/uploads/2020/06/personal_photo-129-1000x600.jpg" } />
          ) : null}
          
          {showGallery && <section id="gallery"><Gallery galleryPieces={galleryPieces} selectedPiece={selectedPiece}/></section>}
          
          {showOrderForm && <section id="order-form"> <OrderForm stickerPrice={stickerPrice} postOrder={postOrder}/></section>}
          
          {showGuestbook && <section id="guestbook"><Guestbook guestbookEntries={guestbookEntries} postGuestbookEntry={postGuestbookEntry} addLike={addLike}/></section>}

      </main>

      <Footer showGuestbook={showGuestbook} setShowGuestbook={setShowGuestbook} setShowGallery={setShowGallery} setShowOrderForm={setShowOrderForm} />
    
    </div>
  );
}

export default App2;
