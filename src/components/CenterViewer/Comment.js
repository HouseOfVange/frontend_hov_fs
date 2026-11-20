import React from 'react';
import './Piece.css';
import './Comment.css';
import { getRelativeTime } from '../../utils/getRelativeTime';

const Comment = (props) => {

    return (
        <section className="comment" >
            <p>{props.author} ({getRelativeTime(props.created_at)})</p>
            <p>{props.message}</p>
            <p onClick={() => props.handleCommentLike(
                    props.piece_id,
                    props.id
                )}>
                👍 {props.likes_count}
            </p>
        </section>
    );
};

export default Comment;