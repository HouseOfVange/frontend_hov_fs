import React from 'react';
import GuestbookEntry from './GuestbookEntry';
import GuestbookEntryForm from './GuestbookEntryForm';

const Guestbook = (props) => {

    return (
        <section className="guestbook">
            This is the guestbook

            <GuestbookEntryForm postGuestbookEntry={props.postGuestbookEntry}/>

            {[...props.guestbookEntries].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map((entry) => (
                <GuestbookEntry 
                    key={entry.id}
                    id={entry.id}
                    author={entry.author}
                    created_at={entry.created_at}
                    likes_count={entry.likes_count}
                    message={entry.message}
                    addLike={props.addLike}
                />
            ))}
        </section>
    );
};

export default Guestbook;
