import React from "react";
import Appointment from "../components/Appointment";
import Header from "../components/Header";

const Main = () => {
  return (
    <>
      <Header />

      {/* Appointment Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <Appointment />

        {/* Map Section */}
        <section className="mt-16 rounded-lg shadow-lg overflow-hidden aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12897.755545875261!2d-79.4680246!3d36.082788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88532bdf075c37d3%3A0x612f6cb1aabb0334!2sTwisted%20Sisters%20Salon!5e0!3m2!1sen!2sus!4v1694006564098!5m2!1sen!2sus"
            title="Salon Location Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>
    </>
  );
};

export default Main;
