import React from 'react';
import './PiecePage.css';

const PiecePage = ({selectedPrice, stickerPrice, setShowOrderForm }) => {
    const pricePointAvailable = "FOR SALE BY ARTIST";
    const purchasedPrice = "is spoken for";
    const finallyOver = ":') It's finally over. Soyoung has dibs on this price fyi";

    if(selectedPrice === stickerPrice) {
        setShowOrderForm(true)
    }

    return (
        <section className="piece">
        {selectedPrice === 1414 ? (
            <heading className='piecepageheading'>{finallyOver}</heading>
        ): selectedPrice > stickerPrice ? (
            <heading className='piecepageheading'>{"$" + selectedPrice + " " + pricePointAvailable}</heading>
        ): (
            <heading className='piecepageheading'>{"$" + selectedPrice + " " + purchasedPrice}</heading>
        )}
        </section>
    );
};

export default PiecePage;
