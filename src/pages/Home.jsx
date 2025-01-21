import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';


const Home = () => {

  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    // Delay the typewriter to match the slide-in animation duration
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, 500); // Adjust this delay to match the slide-in animation duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="home-page min-h-screen flex flex-col items-center justify-center text-center p-6 m-0">
      <div className="max-w-4xl">
        <div className="flex flex-wrap items-center justify-center mb-6 space-x-4">
          <h1 className="animate-slideInLeft relative text-8xl font-extrabold">
            Hi, I'm
          </h1>
          <h1 className=" animate-slideInDown relative text-8xl font-extrabold inline-grid">
            {/* Blurred background layer for glow */}
            <span
              className="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.primary),theme(colors.secondary),theme(colors.accent))] bg-clip-text blur-xl [-webkit-text-fill-color:transparent]"
              aria-hidden="true"
            >
              Lena,
            </span>
            {/* Clear foreground layer */}
            <span
              className="relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.primary),theme(colors.secondary),theme(colors.accent))] bg-clip-text [-webkit-text-fill-color:transparent]"
            >
              Lena,
            </span>
          </h1>
          <h1 className="animate-slideInUp relative text-8xl font-extrabold">
            and I like{' '}
            <span className="relative text-8xl font-thin italic">
              {showTypewriter ? (
                <Typewriter
                  words={['art.', 'writing.', 'creativity.', 'coding.', 'learning.', 'reading.',]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              ) : (
                '...'
              )}
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;

