import React from 'react';
import './background.css';
import ReactPlayer from 'react-player'; // Create a CSS file for styling

const BackgroundVideo = () => {
  return (
    <div className="background-video-container">
      <ReactPlayer
        className="background-video"
        url="https://youtu.be/6bOvXpE9M_s?si=HNpWi3LwQNW2clsT" // Replace with your video URL
        width="100%"
        height="100%"
        playing
        loop
        muted
      />
    </div>
  );
};

export default BackgroundVideo;
