import React from 'react';
import 'components/CenterViewer/GuestbookEntry.css';

const GuestbookEntry = (props) => {

const getRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((date - now) / 1000);
    
    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
    
    if (Math.abs(diffInSeconds) < 60) return rtf.format(diffInSeconds, 'second');
    if (Math.abs(diffInSeconds) < 3600) return rtf.format(Math.floor(diffInSeconds / 60), 'minute');
    if (Math.abs(diffInSeconds) < 86400) return rtf.format(Math.floor(diffInSeconds / 3600), 'hour');
    return rtf.format(Math.floor(diffInSeconds / 86400), 'day');
};

    return (
        <section className="guestbookentry">
            <p>{props.author} ({getRelativeTime(props.created_at)})</p>
            <p>{props.message}</p>
            <p onClick={() => props.addLike(props.id)}>👍 {props.likes_count}</p>
        </section>
    );
};

export default GuestbookEntry;
