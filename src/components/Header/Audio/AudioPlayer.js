import React, { useState, useRef } from "react";
import './AudioPlayer.css';
import audioFile from './itsabouttrust.mp3';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false); // Manage playback state
    const audioRef = useRef(new Audio(audioFile)); // Create a single audio instance
    audioRef.current.loop = true;

    const handlePlay = () => {
        audioRef.current.play(); // Play audio
        setIsPlaying(true);
    };

    const handleStop = () => {
        audioRef.current.pause(); // Pause audio
        audioRef.current.currentTime = 0; // Reset to the start
        setIsPlaying(false);
    };

    return (
        <section className="audiobutton">
            <button onClick={isPlaying ? handleStop : handlePlay}>
                {isPlaying ? "shut up!" : "listen up"}
            </button>
        </section>
    );
};

export default AudioPlayer;
