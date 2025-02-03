import React from 'react';
import '../App.css'; // Import the CSS for masonry layout

// Import images
import stefi from '../assets/IMG_0129.JPG';
import manon from '../assets/IMG_2836.JPEG';
import modernThumper from '../assets/IMG_2929.JPG';
import thumper from '../assets/IMG_4564.JPG';
import rose from '../assets/IMG_3220.JPG';
import church from '../assets/IMG_3920.JPEG';
import sisters from '../assets/IMG_5973.JPG';
import cardinal from '../assets/IMG_6008.JPG';
import beachCastle from '../assets/IMG_1643.JPEG';
import wham from '../assets/IMG_8027.JPEG';
import julia from '../assets/IMG_8971.JPEG';
import sunflower from '../assets/sunflower.JPEG';
import golden from '../assets/golden.JPEG';
import dublin from '../assets/dublin.JPEG';
import dock from '../assets/dock.JPEG';
import daffodil from '../assets/daffodil.JPEG';
import cliffWalk from '../assets/cliffWalk.JPEG';
import castle from '../assets/castle.JPEG';
import theMedd from '../assets/theMedd.JPEG';
import pottery from '../assets/pottery.JPEG';
import parmField from '../assets/parmField.JPEG';
import lookout from '../assets/lookout.JPEG';
import birdWatch from '../assets/birdWatch.JPEG';
import sunwater from '../assets/sunwater.JPEG';
import autumn from '../assets/autumn.JPEG';

const Gallery = () => {
  // Array of image objects
  const images = [
    { src: stefi, title: 'Grazie, Stefi', date: 'November 2024', medium: 'digital painting', description: 'A dedication to my host mom in Parma.' },
    { src: manon, title: 'Lone Star', date: 'August 2024', medium: 'digital painting', description: 'An interpretation of Manon, Crochan Queen.' },
    { src: modernThumper, title: 'Thumper #2', date: 'September 2018', medium: 'acrylic on canvas', description: 'A modern interpretation of my Shih Tzu.' },
    { src: thumper, title: 'Thumper #3', date: 'May 2019', medium: 'oil on canvas', description: 'Thumper basking in the summer sun.' },
    { src: rose, title: 'Evermore/Enchant', date: 'Castaway Cay | October 2018', medium: 'photograph', description: 'A red rose in bloom.' },
    { src: church, title: 'Lacrimoso', date: 'February 2019', medium: 'photograph', description: 'The reverence and power of a small chapel.' },
    { src: sisters, title: '(di) Amore', date: 'December 2019', medium: 'graphite drawing', description: 'A heartfelt moment between sisters.' },
    { src: cardinal, title: 'Nurture', date: 'December 2019', medium: 'acrylic on canvas', description: 'The meaning of family through nature.' },
    { src: beachCastle, title: 'Torre', date: 'Belém | March 2024', medium: 'photograph', description: 'Torre de Belém in late afternoon.' },
    { src: wham, title: 'Someone Special', date: 'December 2021', medium: 'graphite drawing', description: 'A sketch of Wham! from reference.' },
    { src: julia, title: 'Thermal (Julia)', date: 'Budapest | December 2023', medium: 'photograph', description: 'The joys of thermal Budapest in winter.' },
    { src: sunflower, title: 'Girasole', date: 'Sicilia | July 2023', medium: 'photograph', description: 'Flourishing sunflowers along the sicilian coast.' },
    { src: golden, title: 'White Picket Lake', date: 'Zurich | September 2023', medium: 'photograph', description: 'A depiction of everyday life in Zurich.' },
    { src: dublin, title: 'Dublin in Vibrancy', date: 'Dublin | November 2023', medium: 'photograph', description: 'A look into industrial Dublin at night.' },
    { src: dock, title: 'Farewell to Arrivederci', date: 'Como | October 2023', medium: 'photograph', description: 'A serene dock awaiting passengers.' },
    { src: daffodil, title: 'Narcissus of Amaryllidaceae', date: 'April 2019', medium: 'graphite drawing', description: 'A scientific sketch of a daffodil.' },
    { src: cliffWalk, title: 'Cliff Walk', date: 'Howth | November 2023', medium: 'photograph', description: 'A quiet walk along seaside cliffs of Ireland.' },
    { src: castle, title: '(c/s)intra in bloom', date: 'Sintra | March 2024', medium: 'photograph', description: 'A blooming Quinta da Regaleira.' },
    { src: theMedd, title: 'Combing for Mermaid Tears', date: 'Cinqueterre | October 2023', medium: 'photograph', description: 'A close-up of the search for seaglass.' },
    { src: pottery, title: 'Crustacea', date: 'August 2023', medium: 'clay', description: 'A slab bowl decorated with nature carvings.' },
    { src: parmField, title: 'Lost in the Parmigiano Reggiano', date: 'Parma | November 2023', medium: 'photograph', description: 'View of Parma from the Caseificio.' },
    { src: lookout, title: 'Lookout', date: 'Howth | November 2023', medium: 'photograph', description: 'A moment for the sunset atop the cliffs.' },
    { src: birdWatch, title: 'Flock', date: 'Zurich | September 2023', medium: 'photograph', description: 'A moment observing a flock of birds.' },
    { src: sunwater, title: 'Sunwater', date: 'Cinqueterre | October 2023', medium: 'photograph', description: 'A swim in the waning Mediterranean summer.' },
    { src: autumn, title: 'Fall Under the Overcast', date: 'Dublin | November 2023', medium: 'photograph', description: 'An autumn walk in cloudy Dublin.' },
  ];
  

  return (
    <div className="masonry-grid animate-fadeIn">
      {images.map((image, index) => (
        <div key={index} className="masonry-item group relative">
          <img
            src={image.src}
            alt={`gallery-photo-${index + 1}`}
            className="w-full rounded-lg"
          />
          {/* Hover overlay */}
          <div className="rounded-lg absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 space-y-2">
            <h3 className="text-lg font-bold">{image.title}</h3>
            <p className="text-sm italic text-gray-300">{image.date}</p>
            <p className="text-sm text-gray-300">{image.medium}</p>
            <p className="text-sm mt-4">{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
