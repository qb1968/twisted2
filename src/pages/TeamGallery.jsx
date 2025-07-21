import { Link } from "react-router-dom";

export default function TeamGallery() {
  // Example team members with IDs (or slugs)
  const teamMembers = [
    { id: "samantha", name: "Samantha's Gallery", photo: "/images/sam.png" },
    { id: "emily", name: "Emily's Gallery", photo: "/images/emily.png" },
    { id: "trisha", name: "Trisha" },
    { id: "john", name: "John" },
    { id: "anna", name: "Anna" },
    { id: "mike", name: "Mike" },
  ];

  return (
    <section className="p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
        Check Out Their Work
      </h1>
      <div className="grid gap-6 md:grid-cols-3">
        {teamMembers.map(({ id, name, photo }) => (
          <Link
            key={id}
            to={`/gallery/${id}`}
            className="block group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            aria-label={`View ${name}'s gallery`}
          >
            <img
              src={photo}
              alt={`${name} in action`}
              className="w-auto h-auto object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            <div className="mt-2 text-center font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
              {name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
