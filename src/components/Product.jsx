import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// Slick Carousel Styles (MUST BE INCLUDED)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images from /public/images/
const images = [
  "/images/back1.png",
  "/images/back2.png",
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
];

// Custom Arrow Buttons
function PrevArrow({ className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${className} !left-2 sm:!left-4 text-[#2d92b3] text-xl sm:text-2xl z-10 hover:text-[#1b5a75]`}
    >
      
    </button>
  );
}

function NextArrow({ className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${className} !right-2 sm:!right-4 text-[#2d92b3] text-xl sm:text-2xl z-10 hover:text-[#1b5a75]`}
    >
      
    </button>
  );
}

export default function ProductGallery() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      className="w-full py-16 md:py-24 bg-cover bg-center bg-no-repeat relative bg-customBlue"
     
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl  text-black font-bold mb-4">
            Bring Your Hair Back to Life
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black font-bold max-w-2xl mx-auto">
            We pride ourselves on being innovative and cutting-edge with our
            hair color and styles.
          </p>
        </div>

        {/* Slick Carousel */}
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="px-2">
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
