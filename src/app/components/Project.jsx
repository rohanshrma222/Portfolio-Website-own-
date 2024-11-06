'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'tailwindcss/tailwind.css';

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const projectRef = useRef(null);

  useEffect(() => {
    const letters = projectRef.current.children;

    // GSAP animation with ScrollTrigger, repeat animation on scroll
    gsap.fromTo(
      letters,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: projectRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play reverse play reverse',
          markers: false, // Set to true if you want to see scroll trigger markers
          scrub: false, // Disables scrubbing so the animation happens in real-time
        },
      }
    );
  }, []);

  return (
    <div className="h-auto flex justify-center items-center py-5 bg-gradient-to-r from-stone-900 via-indigo-900 to-stone-900">
      <h1 ref={projectRef} className="text-6xl font-bold flex space-x-2">
        {['P', 'r', 'o', 'j', 'e', 'c', 't','s'].map((letter, index) => (
          <span key={index} className="inline-block">
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Project;
