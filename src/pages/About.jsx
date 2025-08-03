import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="pb-24 bg-cover bg-center"
      style={{ backgroundImage: `url(/images/about-bg.png)` }}
    >
      <Header />

      <div className="max-w-7xl mx-auto px-4 space-y-20 mt-10">
        {/* About Us Section */}
        <div
          className="flex flex-col md:flex-row items-center gap-10"
          data-aos="fade-up"
        >
          {/* Image */}
          <div className="md:w-1/2" data-aos="fade-right">
            <img
              src="/images/sam-and-sissy-frojt_orig.png"
              alt="Jacki and Sam"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          {/* Text */}
          <div
            className="md:w-1/2 text-center md:text-left"
            data-aos="fade-left"
          >
            <h2 className="font-script text-4xl font-bold text-customBlue mb-4">
              About Us
            </h2>
            <p className="text-gray-800 text-lg font-medium leading-relaxed">
              It all started six years ago with sisters Jacki and Samantha
              sitting on a beach with the idea of owning their own salon. What
              was a lifelong dream soon became a reality. It wasn't long after
              that conversation that Twisted Sisters Salon was born.
              <br />
              <br />
              Jacki and Sam knew from a young age that making women and men feel
              beautiful was something they were passionate about and born to do.
              Together, they have built one of the premiere salons in
              Burlington.
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2"
          data-aos="fade-up"
        >
          {["12.jpg", "13.jpg", "14.jpg", "15.jpg"].map((img, i) => (
            <img
              key={i}
              src={`/images/${img}`}
              alt={`Salon shot ${i + 1}`}
              className="rounded-xl shadow-md w-full h-64 object-cover"
              data-aos="zoom-in-up"
              data-aos-delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
