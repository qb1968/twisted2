import React from "react";
import { Link } from "react-router-dom";
import Sam from "/images/sam.png";
import Jacki from "/images/jacki.png";
import Emily from "/images/emily.png";
import Trisha from "/images/trishaboone_orig.png";
import Vanessa from "/images/vanessa.png";
import Gloria from "/images/gloria.png";
import Andrea from "/images/andreawallace.png";
import Leslie from "/images/lesliej.png";
import Shea from "/images/Shea2.jpg";
import Angie from "/images/Angie.jpg";

const teamMembers = [
  {
    name: "Samantha Sykes",
    role: "Owner/Stylist",
    image: Sam,
    
  },
  {
    name: "Jacki Jochum",
    role: "Owner/Stylist",
    image: Jacki,
  },
  {
    name: "Emily Moody",
    role: "Stylist",
    email: "emilymoody28@aol.com",
    image: Emily,
   
  },
  {
    name: "Leslie Jernigen",
    role: "Stylist",
    image: Leslie,
  },
  {
    name: "Andrea Wallace",
    role: "Stylist",
    image: Andrea,
  },
  {
    name: "Vanessa Faucette",
    role: "Stylist",
    image: Vanessa,
  },
  {
    name: "Gloria Fornter",
    role: "Stylist",
    image: Gloria,
  },
  {
    name: "Shea",
    role: "Stylist",
    image: Shea,
    gallery: "/gallery2",
  },
  {
    name: "Trisha Boone",
    role: "Stylist",
    image: Trisha,
    gallery: "/gallery3",
  },
  {
    name: "Angie Lyn",
    role: "Stylist",
    image: Angie,
    gallery: "/gallery6",
  },
];

const Main = () => {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden border border-white/40 hover:shadow-2xl transition"
            >
              <div className="overflow-hidden group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-[3/4] object-cover rounded-t-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  <Link
                    to="#"
                    className="hover:text-blue-600 transition block focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    {member.name}
                  </Link>
                </h2>

                {member.gallery && (
                  <h3>
                    <Link
                      to={member.gallery}
                      className="text-blue-500 hover:underline"
                    >
                      Gallery
                    </Link>
                  </h3>
                )}

                {member.email && (
                  <p className="text-sm font-serif text-blue-600 hover:underline">
                    <a href={`mailto:${member.email}`}>{member.email}</a>
                  </p>
                )}

                <p className="text-black font-bold">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
