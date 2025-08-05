import React, { useEffect, useState } from 'react';
import './index.css';
import bannerData from './bannerData';

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textAnimationKey, setTextAnimationKey] = useState(0); // ✅ Kunci animasi teks

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex === bannerData.length - 1 ? 0 : prevIndex + 1;
        setTextAnimationKey((k) => k + 1); // ✅ Reset animasi
        return nextIndex;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {bannerData.map((banner, idx) => (
          <div className="slide" key={idx}>
            <img src={banner.img} alt={banner.title} />
            <div className="slide-content" key={textAnimationKey + '-' + idx}>
              <p className="subtitle">{banner.subtitle}</p>
              <h1 className="title">{banner.title}</h1>
              <button className="learn-btn">{banner.buttonLabel}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
