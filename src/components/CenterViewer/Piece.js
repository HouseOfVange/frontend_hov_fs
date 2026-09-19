import React from 'react';
import './Piece.css';

const Piece = (props) => {

    const renderImages = () => {
        if (!props.images) return null;
        return props.images.map((image, index) => (
            <div key={index} className="piece-image">
                <img 
                    src={image.url} 
                    alt={image.alt_text}
                />
                {image.caption && <p>{image.caption}</p>}
            </div>
        ));
    };

    return (
        <section className="piece" ref={props.innerRef}>
            <p>{props.title}</p>
            <p>{props.client}</p>
            <p>{props.description}</p>
            <p>{props.order_year}</p>
            <p>{props.delivery_year}</p>
            {renderImages()}
        </section>
    );
};

export default Piece;