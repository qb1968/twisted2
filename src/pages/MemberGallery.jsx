import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const galleryData = {
  samantha: {
    name: "Samantha Sykes",
    images: Array.from({ length: 12 }, (_, i) => `/gallery/Sam/${i + 1}.jpg`),
  },
  emily: {
    name: "Emily Moody",
    images: [
      ...Array.from({ length: 6 }, (_, i) => `/gallery/Emily/${i + 1}.jpg`),
      ...Array.from({ length: 10 }, (_, i) => `/gallery/Emily/${i + 8}.jpg`),
    ],
  },
  trisha: {
    name: "Trisha Boone",
    images: [
      ...Array.from({ length: 6 }, (_, i) => `/gallery/Trisha/${i + 1}.jpeg`),
      ..."abcdefghi".split("").map((c) => `/gallery/Trisha/${c}.jpeg`),
    ],
  },
  shea: {
    name: "Shea",
    images: Array.from({ length: 9 }, (_, i) => `/gallery/Shea/${i + 1}.jpg`),
  },
  angie: {
    name: "Angie Lyn",
    images: [
      ...[
        6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18, 27, 28, 29, 30, 31, 32, 33, 34,
      ].map((n) => `/gallery/Angie/${n}.jpg`),
    ],
  },
};

export default function MemberGallery() {
  const { memberId } = useParams();
  const memberGallery = galleryData[memberId];
  const [loadedImages, setLoadedImages] = useState({});

  if (!memberGallery) {
    return (
      <section className="p-8 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          No gallery found for <span className="capitalize">{memberId}</span>
        </h2>
        <Link
          to="/team-gallery"
          className="inline-block mt-4 text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded shadow transition"
        >
          ← Back to Team
        </Link>
      </section>
    );
  }

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
        {memberGallery.name}'s Gallery
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {memberGallery.images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden shadow-md flex items-center justify-center"
          >
            {!loadedImages[index] && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-8 h-8 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin"></div>
              </div>
            )}
            <img
              src={src}
              alt={`${memberGallery.name} style ${index + 1}`}
              className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                loadedImages[index] ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() =>
                setLoadedImages((prev) => ({ ...prev, [index]: true }))
              }
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/team-gallery"
          className="inline-block px-5 py-2.5 bg-customBlue text-white text-lg font-medium rounded-md hover:bg-blue-700 transition duration-300 shadow"
        >
          ← Back to Team
        </Link>
      </div>
    </section>
  );
}