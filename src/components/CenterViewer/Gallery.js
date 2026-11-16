import React, { useRef, useEffect } from 'react';
import Piece from './Piece';
import './Gallery.css';

const Gallery = (props) => {
    const pieceRefs = useRef({});
    const openId = props.selectedPiece;

    const handleSelectingPiece = (id, isOpen) => {
        props.setSelectedPiece(isOpen ? null : id);
    };

    useEffect(() => {
        if (openId == null) return;
        const node = pieceRefs.current[openId];
        if (node) {
            node.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [openId]);

        return (
        <section className="gallery">
            {[...props.galleryPieces].map((entry) => {
                const isOpen = openId === entry.id;
                return (
                    <div
                        key={entry.id}
                        ref={(el) => { pieceRefs.current[entry.id] = el; }}
                        className="accordion-item"
                    >
                        <button
                            className="accordion-header"
                            aria-expanded={isOpen}
                            onClick={() => handleSelectingPiece(entry.id, isOpen)}
                        >
                            ${entry.id} {entry.title}
                            <span>{isOpen ? '−' : '+'}</span>
                        </button>
                        {isOpen && (
                            <div className="accordion-body">
                                <Piece
                                    id={entry.id}
                                    title={entry.title}
                                    client={entry.client}
                                    description={entry.description}
                                    order_year={entry.order_year}
                                    delivery_year={entry.delivery_year}
                                    images={entry.images}
                                    is_available={entry.is_available}
                                    addLike={props.addLike}
                                />
                            </div>
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default Gallery;
