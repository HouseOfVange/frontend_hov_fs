import React from 'react';
import 'components/CenterViewer/GuestbookEntry.css';
import { getRelativeTime } from '../../utils/getRelativeTime';

const GuestbookEntry = (props) => {

    return (
        <section className="guestbookentry">
            <p>{props.author} ({getRelativeTime(props.created_at)})</p>
            <p>{props.message}</p>
            <p onClick={() => props.addLike(props.id)}>👍 {props.likes_count}</p>
        </section>
    );
};

export default GuestbookEntry;
