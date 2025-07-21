import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="pt-24 pb-24 bg-cover bg-center"
      style={{
        backgroundImage: `url(/images/about-bg.png)`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {/* Top Section: Image and About Text */}
        <div
          className="flex flex-col md:flex-row items-center gap-12"
          data-aos="fade-up"
        >
          <div className="md:w-1/2" data-aos="fade-right">
            <img
              src="/images/sam-and-sissy-frojt_orig.png"
              alt="Jacki and Sam"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div
            className="md:w-1/2 text-center md:text-left"
            data-aos="fade-left"
          >
            <h2 className="font-script text-3xl md:text-4xl font-bold text-customBlue mb-4">
              About Us
            </h2>
            <p className="text-black font-bold leading-relaxed">
              It all started six years ago with sisters Jacki and Samantha
              sitting on a beach with the idea of owning their own salon. What
              was a lifelong dream soon became a reality. It wasn't long after
              that conversation that Twisted Sisters Salon was born. Jacki and
              Sam knew from a young age that making women and men feel beautiful
              was something they were passionate about and born to do. Together,
              they have built one of the premiere salons in Burlington.
            </p>
          </div>
        </div>

        {/* Gallery Section 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            src="/images/12.jpg"
            alt="Salon shot 1"
            className="rounded-lg shadow-md w-full"
            data-aos="zoom-in-up"
          />
          <img
            src="/images/13.jpg"
            alt="Salon shot 2"
            className="rounded-lg shadow-md w-full"
            data-aos="zoom-in-up"
          />
        </div>

        {/* Gallery Section 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            src="/images/14.jpg"
            alt="Salon shot 3"
            className="rounded-lg shadow-md w-full"
            data-aos="zoom-in-up"
          />
          <img
            src="/images/15.jpg"
            alt="Salon shot 4"
            className="rounded-lg shadow-md w-full"
            data-aos="zoom-in-up"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
