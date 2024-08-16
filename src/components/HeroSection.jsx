// src/components/HeroSection.jsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing images
import tech1 from '../assets/tech1.jpg';
import or from '../assets/or.jpeg';
import Ou from '../assets/Hero_ou.jpg';
import tech2 from '../assets/tech2.jpg';
import tech3 from '../assets/tech3.avif';
import tech4 from '../assets/tech4.jpg';
import tech5 from '../assets/tech5.jpg';

const HeroSection = () => {
  return (
    <header className="relative w-full overflow-hidden">
      <Carousel interval={3000}>
        <Carousel.Item>
        <img
            src={Ou}
            alt="Slide 1"
            className="d-block w-100 h-[17vh] sm:h-[30vh] object-cover"
          />
        </Carousel.Item>
        <Carousel.Item>
        <img
            src={or}
            alt="Slide 1"
            className="d-block w-100 h-[17vh] sm:h-[30vh] object-cover"
          />
        </Carousel.Item>
        <Carousel.Item>
        
          <img
            src={tech1}
            alt="Slide 1"
            className="d-block w-100 h-[17vh] sm:h-[30vh] object-cover"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={tech2}
            alt="Slide 2"
            className="d-block w-100 h-[17vh] sm:h-[30vh] object-cover"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={tech3}
            alt="Slide 3"
            className="d-block w-100 h-[17vh] sm:h-[30vh] object-cover"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={tech4}
            alt="Slide 4"
            className="d-block w-100 h-[17vh] sm:h-[30vh] object-cover"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={tech5}
            alt="Slide 5"
            className="d-block w-100 h-[17vh] sm:h-[30vh] object-cover"
          />
        </Carousel.Item>
      </Carousel>
    </header>
  );
};

export default HeroSection;
