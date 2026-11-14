import React from "react";
import AudioPlayer from 'components/Header/Audio/AudioPlayer';
import AsciiLogo from "components/Header/AsciiLogo/AsciiLogo";
import'components/Header/Header.css';

const Header = (props) => {

    return (
        <header className="header">
            <AudioPlayer />
            <h2>The time to buy is now!</h2>
            <ul>
                <li onClick={() => window.location.hash = "#"}>HOME</li> 
                <li onClick={() => window.location.hash = "#"}>ABOUT</li>
                <li onClick={() => window.location.hash = "#order-form"}>ORDER</li>
                <li onClick={() => window.location.hash = "#gallery"}>GALLERY</li>
                <li onClick={() => window.location.hash = "#guestbook"}>GUESTBOOK</li>
            </ul>
        </header>
    );
};

export default Header;