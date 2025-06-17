import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos1 = [
  "/logo1.webp",
  "/logo2.webp",
  "/logo3.webp",
  "/logo14.webp",
  "/logo7.webp",
  "/logo6.webp",
  "/logo8.webp",
  
];
const logos2 = [
  "/logo9.webp",
  "/logo10.webp",
  "/logo11.webp",
  "/logo12.webp",
  "/logo13.webp",
  "/logo4.webp",
  "/logo2.webp",
  
];

const OurPatner = () => {
  const setting1 = {
    infinite: true,
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: true,
    pauseOnHover: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1280, // xl and down
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024, // lg and down
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // md and down
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640, // sm and down
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const setting2 = {
    infinite: true,
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280, // xl and down
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024, // lg and down
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // md and down
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640, // sm and down
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
   <div className="my-10 mont-font  "> 
    <h2 className="text-3xl md:text-4xl font-bold text-center my-10">
      Our <span className="primary-color">Sponsors</span>
    </h2>
     <Slider {...setting1} className=" my-6">
      {logos1.map((logo, index) => (
        <div key={index} className="flex justify-center items-center p-4">
          <img src={logo} className="h-20  object-contain" alt={`logo-${index}`} />
        </div>
      ))}
    </Slider>

     <Slider {...setting2} className=" my-6">
      {logos2.map((logo, index) => (
        <div key={index} className="flex justify-center items-center p-4">
          <img src={logo} className="h-20 md:h-24 object-contain" alt={`logo-${index}`} />
        </div>
      ))}
    </Slider>
   </div>
  );
};

export default OurPatner;
