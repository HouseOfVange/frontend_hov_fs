import React from "react";
import SocialMedias from "components/Footer/SocialMedias";
import "components/Footer/Footer.css";

const Footer = (props) => (
    <footer>
        <SocialMedias
            showGuestbook={props.showGuestbook}
            setShowGuestbook={props.setShowGuestbook}
            setShowGallery={props.setShowGallery}
            setShowOrderForm={props.setShowOrderForm}
        />
    </footer>
);

export default Footer;