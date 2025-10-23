import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Sadia Jahan",
    feedback:
      "This review platform helped me discover top-notch design templates. Truly a game changer!",
    position: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Arman Hossain",
    feedback:
      "I trust the reviews here more than any other site. Found a great WordPress plugin last week!",
    position: "Freelance Developer",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Nusrat Farin",
    feedback:
      "Absolutely love the honest reviews! Helped me choose the perfect eBook for my startup.",
    position: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    name: "Hasib Mahmud",
    feedback:
      "I discovered some amazing SaaS tools through this platform. Great UI and honest feedback!",
    position: "Digital Marketer",
    image: "https://randomuser.me/api/portraits/men/57.jpg",
  },
  {
    name: "Tanisha Ahmed",
    feedback:
      "This is my go-to site before I purchase any online course. Highly reliable and updated!",
    position: "Student",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
  },
];

const UserFeedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-gradient-to-br from-pink-100 via-red-100 to-red-100 pb-20 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
       <h2 className="text-3xl md:text-4xl  font-bold text-center mb-10 mont-font">
          What Our<span className="primary-color">  Users Say</span>
      </h2>
        
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-3 sm:px-4">
              <div className="bg-white/80 backdrop-blur-sm shadow-md rounded-2xl p-6 sm:p-8 text-center h-[270px] md:h-[300px] flex flex-col justify-between">
                <div>
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover shadow-md"
                  />
                  <p className="text-gray-700 italic text-sm sm:text-base mb-4">"{t.feedback}"</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default UserFeedback;
