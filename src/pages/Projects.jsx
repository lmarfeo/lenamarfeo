import React from 'react';
import { motion } from 'framer-motion';
import spotifhai from '../assets/spotifhai.mp4';
import chatbot from '../assets/chatbot.mp4';

const Projects = () => {
  const projects = [
    {
      title: 'SpotifHAI',
      description:
        'SpotifHAI is an AI-powered platform that creates personalized Spotify playlists through an interactive chatbot interface. With real-time analytics and seamless playlist embedding, it enhances music discovery by tailoring recommendations to individual preferences.',
      video: spotifhai, 
      link: 'https://github.com/sutulas/Spotifhai',
    },
    {
      title: 'AI Data Visualization Tool',
      description:
        'An AI assistant that generates Vega-Lite charts from user queries based on uploaded CSV files.',
      video: chatbot,
      link: 'https://github.com/lmarfeo/AI-Assistant',
    },
  ];

  return (
    <div className="min-h-screen p-6 overflow-y-auto">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className={`min-h-screen flex flex-col lg:flex-row ${
            index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } items-center justify-between gap-4 lg:gap-8 p-6`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {/* Text Section */}
          <div className="flex flex-col items-start w-full lg:w-1/2 max-w-lg">
            <h2 className="text-3xl font-bold text-secondary">{project.title}</h2>
            <p className="text-lg text-base-content mt-4">{project.description}</p>
            <a
              href={project.link}
              className="btn btn-primary mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>

          {/* Video Section */}
          <div className="w-full lg:w-1/2">
            <video
              src={project.video}
              className="w-full max-w-full rounded-md shadow-lg"
              controls
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
