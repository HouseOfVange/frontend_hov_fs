import React from "react";
import './SocialMedias.css'

const SocialMedias = (showGuestBook) => {

    return (
        <section>
            <ul>
                {showGuestBook && <li>thanks for stopping by!</li> || 
                <>
                <li>sign the </li>
                <li><a href="" target='blank'>guestbook</a></li>
                </>}
            </ul>
            <ul>
                <li><a href="https://www.instagram.com/houseofvange/" target="blank">grum</a> </li>
                <li> <a href="https://x.com/houseofvange" target="blank">twat/icks</a> </li>
                <li><a href="https://bsky.app/profile/houseofvange.bsky.social" target="blank">bluhski</a> </li>
                <li><a href="https://www.youtube.com/@houseofvange" target="blank">toob</a> </li>
                <li><a href="https://www.tiktok.com/@houseofvange" target="blank">tickle</a> </li>
            </ul>
        </section>
    );
};

export default SocialMedias;