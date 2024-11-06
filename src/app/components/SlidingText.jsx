'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './MarqueeSection.css'; // You'll need to create this CSS file

const MarqueeSection = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const marqueeImages = marqueeElement.querySelectorAll('.marque img');
    const marqueeIcons = marqueeElement.querySelectorAll('.marque i');

    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        gsap.to(marqueeElement, {
          transform: "translateX(-200%)",
          duration: 4,
          repeat: -1,
          ease: "none"
        });

        gsap.to(marqueeImages, {
          rotate: 180,
        });

        gsap.to(marqueeIcons, {
          rotate: 90,
        });
      } else {
        gsap.to(marqueeElement, {
          transform: "translateX(0%)",
          duration: 4,
          repeat: -1,
          ease: "none"
        });

        gsap.to(marqueeImages, {
          rotate: 0,
        });

        gsap.to(marqueeIcons, {
          rotate: 270,
        });
      }
    };

    window.addEventListener("wheel", handleWheel);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div id="page1">
      <div id="move" ref={marqueeRef}>
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className="marque">
            <h1>THRIVE BEYOND LIMITS</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt=""
            />
            <i className="ri-arrow-right-double-fill"></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;