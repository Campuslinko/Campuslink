import React from 'react';
import bannerVideo from '../assets/bannerVideo.mp4';
import { motion } from 'framer-motion';

function Banner() {
  const text = 'Welcome - to - CampusLink\nYour - Smart -  Marketplace';

  const animatedText = text.split('').map((char, i) => (
    <motion.span
      key={i}
      className={char === '\n' ? 'block w-full text-center' : ''}
      initial={{ y: 0 }}
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 0.6,
        repeat: Infinity,
        repeatDelay: text.length * 0.1,
        delay: i * 0.1,
        ease: 'easeInOut'
      }}
      style={{ display: char === '\n' ? 'block' : 'inline-block' }}
    >
      {char === '\n' ? <br /> : char}
    </motion.span>
  ));

  return (
    <div className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center z-0">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src={bannerVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-0" />

      {/* Jumping Letters Text */}
      <h1 className="text-white text-center px-4 text-4xl md:text-6xl font-extrabold leading-tight z-10 drop-shadow-lg">
        {animatedText}
      </h1>
    </div>
  );
}

export default Banner;
