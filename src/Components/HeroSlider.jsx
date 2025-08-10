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
    image: "https://i.ibb.co.com/rR67CX0Z/pexels-minhtribgn-8799977.jpg",
  },
  {
    title: "Your Opinion Matters – Share and Help Others",
    description:
      "Help the community with your authentic feedback. Your words will guide others correctly and foster a trustworthy environment.",
    image: "https://i.ibb.co.com/r2sWk8t5/pexels-mikhail-nilov-8297125.jpg",
  },
  {
    title: "Honest Ratings – Build Trust Together",
    description:
      "Help improve quality and transparency by providing detailed ratings and reviews for services you’ve used, empowering others to make smart choices.",
    image: "https://i.ibb.co.com/xqcX7pnt/pexels-kampus-8439657.jpg",
  },
  {
    title: "Discover Services – Guided by Real Feedback",
    description:
      "Find reliable services and make informed choices by exploring experiences shared by others, ensuring you pick what truly fits your needs.",
    image: "https://i.ibb.co.com/HDf7VgkN/pexels-george-pak-7972316.jpg",
  },
  {
    title: "Collective Wisdom – Better Choices Together",
    description:
      "Leverage the power of community insights. Every shared review builds a more informed environment for all, creating a stronger and smarter network.",
    image: "https://i.ibb.co.com/wZrJ4k98/pexels-rdne-8279046.jpg",
  },
];

const HeroSlider = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  // Animation variants: fade + slide up
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {HeroSliders.map((slide, index) => (
          <div
            key={index}
            className="relative h-[100vh] text-white p-4 text-center"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Animate container with a unique key per slide to re-trigger animation */}
            <motion.div
              key={currentSlide} // <-- key changes on slide change to restart animation
              className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 md:px-20 space-y-6"
              variants={variants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold mont-font"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="text-sm md:text-lg lg:text-xl lg:w-3/4 mx-auto poppins"
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                {slide.description}
              </motion.p>
              <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
              >
                <button className="px-6 py-3 w-[150px] text-xl bg-[#017CDB] text-white rounded hover:bg-[#005f94]">
                  Get Start
                </button>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </Slider>

      {/* Custom Next/Prev Buttons */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-10 justify-center z-10">
        <button
          onClick={previous}
          className="text-white px-5 py-2 rounded-full font-semibold transition"
        >
          <GrPrevious size={30} />
        </button>
        <button
          onClick={next}
          className="text-white px-5 py-2 rounded-full font-semibold transition"
        >
          <GrNext size={30} />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
