import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import liliana from '../img/liliana.png';
import tuna from '../img/tuna.png';
import escultura from '../img/escultura.png';

const slidesData = [
  {
    image: liliana,
    quote: "“I never paint dreams or nightmares. I paint my own reality.” - Frida Kahlo",
  },
  {
    image: tuna,
    quote: "“We don’t make mistakes, just happy little accidents.” – Bob Ross",
  },
  {
    image: escultura,
    quote: "“Monsters are the patron saints of imperfection.” – Guillermo del Toro",
  },
];

function Slide({ image, quote }) {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat text-yellow-50" aria-live="polite" role="group">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 z-10">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">{quote}</h1>
        </div>
      </div>

      <img
        src={image}
        alt={`Slide`}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
    </div>
  );
}

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,  // Adjust autoplay speed
    easing: 'ease-in-out',
  };

  return (
    <Slider {...settings}>
      {slidesData.map((slide, index) => (
        <Slide key={index} {...slide} />
      ))}
    </Slider>
  );
}

export default Banner;
