"use client"
import React, { useEffect } from "react";
import "./Marquee.css";
import gsap from "gsap";

const Marquee = () => {
  useEffect(() => {
    const marqueAnimation = () => {
      window.addEventListener("wheel", (event) => {
        if (event.deltaY > 0) {
          gsap.to(".marque", {
            transform: "translateX(-200%)",
            duration: 4,
            repeat: -1,
            ease: "none",
          });

          gsap.to(".marque img", {
            rotate: 180,
          });

          gsap.to(".marque i", {
            rotate: 90,
          });
        } else {
          gsap.to(".marque", {
            transform: "translateX(0%)",
            duration: 4,
            repeat: -1,
            ease: "none",
          });

          gsap.to(".marque img", {
            rotate: 0,
          });

          gsap.to(".marque i", {
            rotate: 270,
          });
        }
      });
    };

    marqueAnimation();
  }, []);

  return (
    <div>
      <div id="page2">
        <div id="move">
          <div className="marque">
            <h1>PROJECTS</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt="arrow"
            />
            <i className="ri-arrow-right-double-fill"></i>
          </div>
          <div className="marque">
            <h1>PROJECTS</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt="arrow"
            />
            <i className="ri-arrow-right-double-fill"></i>
          </div>
          <div className="marque">
            <h1>PROJECTS</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt="arrow"
            />
            <i className="ri-arrow-right-double-fill"></i>
          </div>
          <div className="marque">
            <h1>PROJECTS</h1>
            <img
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt="arrow"
            />
            <i className="ri-arrow-right-double-fill"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
