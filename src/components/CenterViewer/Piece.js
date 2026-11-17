import React, {useEffect, useState} from 'react';
import './Piece.css';
import Comment from './Comment';

const Piece = (props) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        props.getCommentsForPiece(props.id).then((data) => {
            setComments(data || []);
        });
    }, [props.id]);


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

    const renderComments = () => {

        if (comments.length === 0) {
            return <p>No comments yet.</p>;
        }

        return comments.map((comment) => (
            <Comment 
                key={comment.id}
                author={comment.author}
                message={comment.message}
                likes_count={comment.likes_count}
                created_at={comment.created_at}
            />
        ));
    }

    return (
        <section className="piece" ref={props.innerRef}>
            <p>{props.title}</p>
            <p>{props.client}</p>
            <p>{props.description}</p>
            <p>{props.order_year}</p>
            <p>{props.delivery_year}</p>
            {renderImages()}
            <section className="comments-section">
                {renderComments()}
            </section>
        </section>
    );
};

export default Piece;