import React, { useState } from 'react';

const GuestbookEntryForm = (props) => {

    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        props.postGuestbookEntry(author,message);
        setAuthor('');
        setMessage('');
        setIsSubmitting(false);
    };


    return (
            <form
                onSubmit={handleSubmit} 
                className="guestbook-form">
                <div>
                    <label htmlFor="author">Name:</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button 
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </form>
    );
};

export default GuestbookEntryForm;
