import React from "react";
import Appointment from "../components/Appointment";



const Main = () => {
  return (
    <>
      {/* Optional: Breadcrumb */}
      {/* <Bredcrumb title="Appointment" subtitle="Book Now" /> */}

      <Appointment />

      <div className="w-full mt-10">
        <div className="container mx-auto px-4">
          <div className="w-full aspect-video overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12897.755545875261!2d-79.4680246!3d36.082788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88532bdf075c37d3%3A0x612f6cb1aabb0334!2sTwisted%20Sisters%20Salon!5e0!3m2!1sen!2sus!4v1694006564098!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Salon Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
