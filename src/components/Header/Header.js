import React from "react";
import AudioPlayer from 'components/Header/Audio/AudioPlayer';
import AsciiLogo from "components/Header/AsciiLogo/AsciiLogo";
import'components/Header/Header.css';

const Header = (props) => {

    return (
        <header>
            <AudioPlayer />
            <h2>The time to buy is now!</h2>
        </header>
    );
};

export default Header;