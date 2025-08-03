import { Link } from "react-router-dom";
import Header from "../components/Header";
export default function TeamGallery() {
  const teamMembers = [
    { id: "samantha", name: "Samantha's Gallery", photo: "/images/sam.png" },
    { id: "emily", name: "Emily's Gallery", photo: "/images/emily.png" },
    {
      id: "trisha",
      name: "Trisha's Gallery",
      photo: "/images/trishaboone_orig.png",
    },
    { id: "shea", name: "Shea's Gallery", photo: "/images/Shea2.jpg" },
    { id: "angie", name: "Angie's Gallery", photo: "/images/Angie.jpg" },
  ];

  return (
    <section className=" bg-gray-50">
      <Header/>
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 mt-5">
        Check Out Their Work
      </h1>

      <div className="grid gap-6 md:grid-cols-3">
        {teamMembers.map(({ id, name, photo }) => (
          <Link
            key={id}
            to={`/gallery/${id}`}
            className="block group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-white"
            aria-label={`View ${name}'s gallery`}
          >
            <div className="aspect-square w-full flex items-center justify-center bg-gray-100 rounded-t-xl overflow-hidden">
              <img
                src={photo}
                alt={`${name} preview`}
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </div>
            <div className="p-4 text-center font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
              {name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
