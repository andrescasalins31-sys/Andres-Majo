import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
"/images/foto (1).jpeg",
"/images/foto (2).jpeg",
"/images/foto (3).jpeg",
"/images/foto (4).jpeg",
"/images/foto (5).jpeg",
"/images/foto (6).jpeg",
"/images/foto (7).jpeg",
"/images/foto (8).jpeg",
"/images/foto (9).jpeg",
"/images/foto (10).jpeg",
"/images/foto (11).jpeg",
"/images/foto (12).jpeg",
"/images/foto (13).jpeg",
];

const BackgroundCarousel = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="absolute inset-0 z-0 opacity-30">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Foto ${index + 1}`}
              className="w-full h-screen object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BackgroundCarousel;
