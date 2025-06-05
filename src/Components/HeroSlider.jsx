import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";

const HeroSliders = [
  {
    "title": "Real User Experiences – Make the Right Decision",
    "description": "Before choosing a service, learn about genuine user reviews and experiences.",
    "image": "https://i.ibb.co/tp9vH18M/De-Watermark-ai-1748973861900.jpg"
  },
  {
    "title": "Your Opinion Matters – Share and Help Others",
    "description": "Help the community with your authentic feedback. Your words will guide others correctly.",
    "image": "https://i.ibb.co/m5n5k0GX/De-Watermark-ai-1748973953078.jpg"
  },
  {
    "title": "Honest Ratings, Meaningful Reviews – Contribute to Transparency",
    "description": "Help improve quality and transparency by providing detailed ratings and reviews for services used.",
    "image": "https://i.ibb.co/3YVSd3NZ/De-Watermark-ai-1748973991091.jpg"
  },
  {
    "title": "Discover Trusted Services – Guided by Real Feedback",
    "description": "Find reliable services and make informed choices by exploring experiences shared by others.",
    "image": "https://i.ibb.co/20JSvYDR/De-Watermark-ai-1748973900206.jpg"
  },
  {
    "title": "Collective Wisdom – Better Choices Together",
    "description": "Leverage the power of community insights. Every shared review builds a more informed environment for all.",
    "image": "https://i.ibb.co/3YVSd3NZ/De-Watermark-ai-1748973991091.jpg"
  }
];

const HeroSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  // fade: true, // Remove or comment this line for horizontal slide
  arrows: false,
  };

 
  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {HeroSliders.map((slide, index) => (
          <div key={index} className="relative h-[80vh] text-white p-4 text-center  ">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative z-10 container mx-auto h-full flex flex-col justify-center  px-6 md:px-20 space-y-4">
              <h1
                className="text-4xl md:text-6xl font-bold mont-font  "
               
              >
                {slide.title}
              </h1>
              <p
                className="text-sm md:text-lg lg:text-xl lg:w-3/4 mx-auto poppins"
               
              >
                {slide.description}
              </p>
             
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Next/Prev Buttons */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-10 justify-center z-10">
        <button
          onClick={previous}
          className=" text-white px-5 py-2 rounded-full font-semibold transition"
        >
        <GrPrevious />
        </button>
        <button
          onClick={next}
          className=" text-white px-5 py-2 rounded-full font-semibold transition"
        >
         <GrNext />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
