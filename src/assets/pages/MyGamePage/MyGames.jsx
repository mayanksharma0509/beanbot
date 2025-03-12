import React, { useState, useRef, useEffect } from "react";
import Home1 from "./../../video/home1.mp4";
import Home2 from "./../../video/home2.mp4";
import Home3 from './../../video/home3.mp4';
import Lefta from './../../images/leftar.png';
import Bg from './../../video/bgsmall.mp4';
import Righta from './../../images/rightarr.png';
import Text1 from './Text1';
import Text2 from './Text2';
import Text3 from './Text3';

function MyGames() {
  const videos = [Home3, Home2, Home1]; // Array of videos
  const texts = [<Text3 />, <Text2 />, <Text1 />]; // Array of text components
  
  const [ currentVideo, setCurrentVideo] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  
  const videoRef = useRef(null);
  const bgVideoRef = useRef(null);

  // Function to change video
  const changeContent = (direction) => {
    setCurrentVideo((prev) => (direction === "next" ? (prev + 1) % videos.length : (prev - 1 + videos.length) % videos.length));
    setCurrentText((prev) => (direction === "next" ? (prev + 1) % texts.length : (prev - 1 + texts.length) % texts.length));
  };

  // Restart video when source changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, [currentVideo]);

  return (
    <section className="hero-section">
      {/* Background Video */}
      <div className="video-container">
        <video ref={bgVideoRef} autoPlay loop muted playsInline>
          <source src={Bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Foreground Video */}
      <div className="hero-video">
        <video ref={videoRef} className="home1" loop muted autoPlay>
          <source src={videos[currentVideo]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Navigation Buttons */}
      <img src={Lefta} onClick={() => changeContent("prev")} className="prev-button" alt="Previous" />
      <img src={Righta} onClick={() => changeContent("next")} className="next-button" alt="Next" />

      {/* Text Section */}
      <div className="text-container">
        {texts[currentText]}
      </div>
    </section>
  );
}

export default MyGames;
