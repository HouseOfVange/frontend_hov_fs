import React, { useRef, useEffect } from 'react';
import Piece from './Piece';

const Gallery = (props) => {

    const pieceRefs = useRef({});

    // if props.selectedPiece is not null, scroll to the selected piece in the gallery.
        useEffect(() => {
        if (props.selectedPiece != null) {
            const node = pieceRefs.current[props.selectedPiece];
            if (node) {
                node.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, [props.selectedPiece, props.galleryPieces]);
    
    return (
        <section className="gallery">
            {[...props.galleryPieces].map((entry) => (
                <Piece
                    key={entry.id}
                    innerRef={(el) => { pieceRefs.current[entry.id] = el; }}
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
            ))}
        </section>
    );
};

export default Gallery;
