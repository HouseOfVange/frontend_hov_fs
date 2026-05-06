import { useState, useEffect } from 'react';
import './LoadingScreen.css';
import AsciiLogo from 'components/Header/AsciiLogo/AsciiLogo';

const LoadingScreen = ({ onComplete }) => {
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFading(true);
        }, 2000); // show for 2 seconds then start fading

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`loading-screen ${fading ? 'fade-out' : ''}`}
            onTransitionEnd={onComplete}
        >
            <AsciiLogo />
        </div>
    );
};

export default LoadingScreen;