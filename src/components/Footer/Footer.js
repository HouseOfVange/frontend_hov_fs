import React from "react";
import SocialMedias from "components/Footer/SocialMedias";
import 'components/Footer/Footer.css';


const Footer = (showGuestBook) => {

    return (
        <footer>
            <SocialMedias showGuestBook/>
        </footer>
    );
};

export default Footer;