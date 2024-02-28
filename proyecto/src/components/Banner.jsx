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
    quote: (
      <>
        <h1 className="text-4xl font-bold mb-4">
          “I never paint dreams or nightmares. I paint my own reality.”
        </h1>
        <p className="text-lg">— Frida Kahlo</p>
      </>
    ),
  },
  {
    image: tuna,
    quote: (
      <>
        <h1 className="text-4xl font-bold mb-4">
          “We don’t make mistakes, just happy little accidents.”
        </h1>
        <p className="text-lg">– Bob Ross</p>
      </>
    ),
  },
  {
    image: escultura,
    quote: (
      <>
        <h1 className="text-4xl font-bold mb-4">
          “Monsters are the patron saints of imperfection.”
        </h1>
        <p className="text-lg">– Guillermo del Toro</p>
      </>
    ),
  },
];

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,  // Adjust the speed for a smoother transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,  // Adjust the autoplay speed for a quick transition
    easing: 'ease-in-out',  // Use 'ease-in-out' for a smoother transition
  };

  return (
    <Slider {...settings}>
      {slidesData.map((slide, index) => (
        <div key={index} className="relative bg-cover bg-center bg-no-repeat text-white">
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 z-10">
            <div className="max-w-xl text-center lg:text-left">
              <h1 className="text-4xl font-bold mb-4">{slide.quote}</h1>
            </div>
          </div>

          <img
            src={slide.image}
            alt={`Slide ${index}`}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        </div>
      ))}
    </Slider>
  );
}

export default Banner;
