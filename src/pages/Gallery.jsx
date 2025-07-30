import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

import Img1 from "/gallery/1.jpg";
import Img2 from "/gallery/2.jpg";
import Img3 from "/gallery/3.jpg";
import Img4 from "/gallery/4.jpg";
import Img5 from "/gallery/5.jpg";
import Img6 from "/gallery/6.jpg";
import Img7 from "/gallery/7.jpg";
import Img9 from "/gallery/8.jpg";
// import Img10 from "/gallery/img-2515_orig.png";
// import Img11 from "/gallery/img-2517.png";
// import Img12 from "/gallery/img-2533.png";
// import Img13 from "/gallery/img-2533_orig.png";
// import Img14 from "/gallery/img-3181-2.png";
// import Img15 from "/gallery/img-3213.png";
// import Img16 from "/gallery/img-3214.png";
// import Img17 from "/gallery/img-3215.png";
// import Img18 from "/gallery/img-3218.png";
// import Img19 from "/gallery/img-3309-2.png";
// import Img20 from "/gallery/img-3366.png";
// import Img21 from "/gallery/img-3504.png";
// import Img22 from "/gallery/img-4292.png";
// import Img23 from "/gallery/img-9085.jpg";

const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img9,
  // Img10,
  // Img11,
  // Img12,
  // Img13,
  // Img14,
  // Img15,
  // Img16,
  // Img17,
  // Img18,
  // Img19,
  // Img20,
  // Img21,
  // Img22,
  // Img23,
];

const Gallery = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  // Open lightbox at clicked image index (1-based)
  const openLightboxAt = (index) => {
    setCurrentSlide(index + 1);
    // Toggle off then on to ensure lightbox opens even if same image clicked twice
    setIsLightboxOpen(false);
    setTimeout(() => setIsLightboxOpen(true), 10);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
          Twisted Sisters Gallery
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          aria-label="Image gallery"
        >
          {images.map((src, i) => (
            <figure
              key={i}
              onClick={() => openLightboxAt(i)}
              onKeyDown={(e) => e.key === "Enter" && openLightboxAt(i)}
              tabIndex={0}
              role="button"
              aria-label={`Open image ${i + 1} in lightbox`}
              className="cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500"
            >
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-64 object-cover"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </figure>
          ))}
        </div>
      </div>

      <FsLightbox
        toggler={isLightboxOpen}
        sources={images}
        slide={currentSlide}
        disableLocalStorage={true} // optional, disables localStorage usage
        keyboardSupport={true}
        showThumbs={false}
      />
    </section>
  );
};

export default Gallery;