import React from 'react';
import { Typewriter } from 'react-simple-typewriter'; 
import lenaProfileImage from '../assets/lenaCartoon.png';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-left p-9">
      <div className="animate-slideInLeft p-9 max-w-3xl">
        <h1 className="text-4xl font-bold text-primary mb-4">
          About {''}
          <span className="italic font-thin">
            <Typewriter
              words={['me', 'Lena Marfeo']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={4000}
            />
          </span>
        </h1>
        <p className="m-9 text-lg leading-relaxed">
          Hi there! I’m a senior computer science major at Boston College who loves bringing ideas to life. 
          Whether it’s building web applications, a simple sketch, or creative writing— 
          I’m always drawn to the process of creating something unique and meaningful.
        </p>
        <p className="m-9 text-lg leading-relaxed">
          Outside of my projects, I spend my time traveling, getting lost in a good book, or practicing my Italian (it’s coming along, I promise!). 
          I believe curiosity and a fresh perspective can make any challenge exciting. 
          And because little details say a lot, here are <span className="text-primary">a few of my favorite things</span>:
        </p>
        <ul className="m-9 text-lg leading-relaxed mt-4 list-disc pl-6">
          <li>Cooking/Baking</li>
          <li>Formula 1</li>
          <li>Disney</li>
          <li>One Direction</li>
        </ul>
      </div>
      <div className="animate-slideInRight w-2/5 h-auto">
        <img className="mask mask-hexagon object-top" src={lenaProfileImage} alt="profile" />
      </div>
    </div>
  );
};

export default About;
