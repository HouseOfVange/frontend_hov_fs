import './App2.css';
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import LoadingScreen from 'components/LoadingScreen';
import PriceSticker from 'components/RightColumn/PriceSticker';
import Guestbook from 'components/CenterViewer/Guestbook';

function App2() {

  // Neon
  // const hov_app_backend_URL = `${process.env.REACT_APP_HOV_BACKEND_URL}`;

  // local
  const hov_app_backend_URL = `${process.env.REACT_APP_LOCAL_HOV_BACKEND_URL}`;

  // SET STATES
  const [stickerPrice, setStickerPrice] = useState();
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [loading, setLoading] = useState(true);

  const [showGuestBook, setShowGuestbook] = useState(true)
  const [guestbookEntries, setGuestbookEntries] = useState([]);


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

  return (
    <div className="App2">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Header />
      <main className="main-content">
          <PriceSticker 
            setShowOrderForm={setShowOrderForm}
            stickerPrice={stickerPrice} 
          />
          {showGuestBook && <Guestbook guestbookEntries={guestbookEntries} postGuestbookEntry={postGuestbookEntry} addLike={addLike}/>}
      </main>
      <Footer setShowGuestbook={setShowGuestbook}/>
    </div>
  );
}

export default App2;
