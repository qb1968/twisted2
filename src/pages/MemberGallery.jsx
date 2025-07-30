import { useParams, Link } from "react-router-dom";

const galleryData = {
  samantha: {
    name: "Samantha Sykes",
    images: [
      "/gallery/Sam/1.jpg",
      "/gallery/Sam/2.jpg",
      "/gallery/Sam/3.jpg",
      "/gallery/Sam/4.jpg",
      "/gallery/Sam/5.jpg",
      "/gallery/Sam/6.jpg",
      "/gallery/Sam/7.jpg",
      "/gallery/Sam/8.jpg",
      "/gallery/Sam/9.jpg",
      "/gallery/Sam/10.jpg",
      "/gallery/Sam/11.jpg",
      "/gallery/Sam/12.jpg",
    ],
  },
  emily: {
    name: "Emily Moody",
    images: [
      "/gallery/Emily/1.jpg",
      "/gallery/Emily/2.jpg",
      "/gallery/Emily/3.jpg",
      "/gallery/Emily/4.jpg",
      "/gallery/Emily/5.jpg",
      "/gallery/Emily/6.jpg",

      "/gallery/Emily/8.jpg",
      "/gallery/Emily/9.jpg",
      "/gallery/Emily/10.jpg",
      "/gallery/Emily/11.jpg",
      "/gallery/Emily/12.jpg",
      "/gallery/Emily/13.jpg",
      "/gallery/Emily/14.jpg",
      "/gallery/Emily/15.jpg",
      "/gallery/Emily/16.jpg",
      "/gallery/Emily/17.jpg",
    ],
  },
  trisha: {
    name: "Trisha Boone",
    images: [
      "/gallery/Trisha/1.jpg",
      "/gallery/Trisha/2.jpg",
      "/gallery/Trisha/3.jpg",
      "/gallery/Trisha/4.jpg",
      "/gallery/Trisha/5.jpg",
      "/gallery/Trisha/6.jpg",

      "/gallery/Trisha/8.jpg",
      "/gallery/Trisha/9.jpg",
      "/gallery/Trisha/10.jpg",
      "/gallery/Trisha/11.jpg",
      "/gallery/Trisha/12.jpg",
      "/gallery/Trisha/13.jpg",
      "/gallery/Trisha/14.jpg",
      "/gallery/Trisha/15.jpg",
      "/gallery/Trisha/16.jpg",
      "/gallery/Trisha/17.jpg",
    ],
  },

  shea: {
    name: "Shea",
    images: [
      "/gallery/Shea/1.jpg",
      "/gallery/Shea/2.jpg",
      "/gallery/Shea/3.jpg",
      "/gallery/Shea/4.jpg",
      "/gallery/Shea/5.jpg",
      "/gallery/Shea/6.jpg",

      "/gallery/Shea/8.jpg",
      "/gallery/Shea/9.jpg",
    ],
  },

  // Add more members...
};

export default function MemberGallery() {
  const { memberId } = useParams();
  const memberGallery = galleryData[memberId];

  if (!memberGallery) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">
          No gallery found for <span className="capitalize">{memberId}</span>
        </h2>
        <Link to="/team-gallery" className="text-indigo-600 underline">
          Back to Team
        </Link>
      </div>
    );
  }

  return (
    <section className="p-6 sm:p-8 max-w-6xl mx-auto">
      {/* Header / Cover Image */}
      {memberGallery.cover && (
        <div className="mb-8">
          <img
            src={memberGallery.cover}
            alt={`${memberGallery.name} cover`}
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />
        </div>
      )}

      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        {memberGallery.name}'s Gallery
      </h2>

      {/* Gallery Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {memberGallery.images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${memberGallery.name} image ${i + 1}`}
            className="w-full h-64 object-cover rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        ))}
      </div>

      {/* Back Link */}
      <div className="mt-10 text-center">
        <Link
          to="/team-gallery"
          className="inline-block text-indigo-600 hover:text-indigo-800 underline transition duration-200"
        >
          ← Back to Team
        </Link>
      </div>
    </section>
  );
}
