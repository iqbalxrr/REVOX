import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const HeroSliders = [
  {
    title: "Real Experiences – Guide the Right Choice",
    description:
      "Before choosing a service, learn about genuine user reviews and experiences to make confident and well-informed decisions.",
    image: "https://i.ibb.co/rR67CX0Z/pexels-minhtribgn-8799977.jpg",
  },
  {
    title: "Your Opinion Matters – Share and Help Others",
    description:
      "Help the community with your authentic feedback. Your words will guide others correctly and foster a trustworthy environment.",
    image: "https://i.ibb.co/r2sWk8t5/pexels-mikhail-nilov-8297125.jpg",
  },
  {
    title: "Honest Ratings – Build Trust Together",
    description:
      "Help improve quality and transparency by providing detailed ratings and reviews for services you’ve used, empowering others to make smart choices.",
    image: "https://i.ibb.co/xqcX7pnt/pexels-kampus-8439657.jpg",
  },
  {
    title: "Discover Services – Guided by Real Feedback",
    description:
      "Find reliable services and make informed choices by exploring experiences shared by others, ensuring you pick what truly fits your needs.",
    image: "https://i.ibb.co/HDf7VgkN/pexels-george-pak-7972316.jpg",
  },
  {
    title: "Collective Wisdom – Better Choices Together",
    description:
      "Leverage the power of community insights. Every shared review builds a more informed environment for all, creating a stronger and smarter network.",
    image: "https://i.ibb.co/wZrJ4k98/pexels-rdne-8279046.jpg",
  },
];

const HeroSlider = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    fade: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const next = () => sliderRef.current.slickNext();
  const previous = () => sliderRef.current.slickPrev();

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {HeroSliders.map((slide, index) => (
          <div key={index} className="relative h-screen w-full">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            </div>

            <motion.div
              key={currentSlide}
              className="relative z-10 flex flex-col justify-center h-full items-center text-center px-6 md:px-20 space-y-6"
              variants={variants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight"
                variants={variants}
                transition={{ delay: 0.2 }}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto"
                variants={variants}
                transition={{ delay: 0.4 }}
              >
                {slide.description}
              </motion.p>
              <motion.div variants={variants} transition={{ delay: 0.6 }}>
                <button className="px-8 py-3 text-lg md:text-xl bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105">
                  Get Started
                </button>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </Slider>

      {/* Navigation Buttons */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-6 z-20">
        <button
          onClick={previous}
          className="flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition"
        >
          <GrPrevious size={24} />
        </button>
        <button
          onClick={next}
          className="flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition"
        >
          <GrNext size={24} />
        </button>
      </div>

      {/* Dots Styling */}
      <style>{`
        .slick-dots {
          bottom: 20px;
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: rgba(255,255,255,0.6);
        }
        .slick-dots li.slick-active button:before {
          color: #017CDB;
        }
      `}</style>
    </div>
  );
};

export default HeroSlider;
