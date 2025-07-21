import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#2D92B3] via-black to-[#1a1a1a] text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 justify-center text-center">
        {/* Column 1: Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">
            <a
              href="https://allwebcon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white  underline font-script"
            >
              Allison Web Consultants
            </a>
          </h2>
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Column 2: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <p className="text-sm">
            📞{" "}
            <a href="tel:+13362294078" className="hover:underline">
              336.229.4078
            </a>
          </p>
          <p className="text-sm">
            📧{" "}
            <a
              href="mailto:info@twistedsisters.com"
              className="hover:underline"
            >
              info@twistedsisters.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
