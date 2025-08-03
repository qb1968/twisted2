import React, { useState, useRef } from "react";
import BGImg3 from "/images/ap-bg.png";

export default function Appointment() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit form using native FormData
    const formData = new FormData(formRef.current);
    fetch("https://submit-form.com/Fah8w4pGF", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          formRef.current.reset(); // Reset the form
          setSubmitted(true); // Show success message
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch(() => alert("Something went wrong. Please try again."));
  };

  return (
    <section
      id="booking"
      className="py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${BGImg3})` }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* Form Section */}
          <div className="w-full lg:w-1/2 bg-white p-8 shadow rounded-lg">
            <h2 className="text-3xl font-bold mb-2">Get Appointment</h2>
            <p className="mb-6 text-gray-600">Fill out your information.</p>

            {submitted ? (
              <div className="text-green-600 font-semibold text-center mb-4">
                Your appointment request has been submitted!
              </div>
            ) : null}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstn"
                  placeholder="First Name"
                  required
                  className="input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="input"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="input"
                />
                <select name="stylist" required className="input">
                  <option value="">Select Stylist</option>
                  <option>Sam</option>
                  <option>Jacki</option>
                  <option>Emily</option>
                  <option>Leslie</option>
                  <option>Andrea</option>
                  <option>Vanessa</option>
                  <option>Gloria</option>
                  <option>Angie</option>
                  <option>Trisha</option>
                  <option>Shea</option>
                </select>
                <select name="service" required className="input">
                  <option value="">Service Needed</option>
                  <option>Color Services</option>
                  <option>Haircut</option>
                  <option>Hair Treatments</option>
                </select>
                <select name="when" required className="input">
                  <option value="">How Soon</option>
                  <option>ASAP</option>
                  <option>Next Few Weeks</option>
                  <option>Next Few Months</option>
                </select>
              </div>

              <textarea
                name="message"
                rows="4"
                placeholder="Write comments"
                className="input"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-customBlue text-white py-3 rounded hover:bg-blue-700 transition"
              >
                Submit Now
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="w-full lg:w-1/2 bg-customBlue p-8 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-center mb-4">
              Contact Us Today!
            </h3>
            <p className="text-center text-black-700">2127 S. Church St.</p>
            <p className="text-center text-black-700">Burlington, NC 27215</p>
            <p className="text-center text-black-700 font-semibold mt-4">
              Phone: 336.229.4078
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
