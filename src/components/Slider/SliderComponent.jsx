// src/components/SliderComponent.js
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.module.css';
import tamaluno from "../../assets/images/slider_image/tamales_1.jpg";
import tamaldos from "../../assets/images/slider_image/tamales_2.png";
import tamaltres from "../../assets/images/slider_image/tamales_3.jpg"

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={tamaluno} alt="Image 1" />
        </div>
        <div>
          <img src={tamaldos} alt="Image 2" />
        </div>
        <div>
          <img src={tamaltres} alt="Image 3" />
        </div>
        {/* Añade más slides aquí */}
      </Slider>
    </div>
  );
};

export default SliderComponent;
