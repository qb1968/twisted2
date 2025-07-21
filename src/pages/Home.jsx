import BGImg1 from "/images/about-bg.png";
import Img from "/images/sam-and-sissy_orig.png"; // replace with actual image path
import Product from "../components/Product";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col items-center text-center mt-5">
      {/* Full-width Image with Gradient Overlay */}
      <div className="w-full h-auto md:h-80 lg:h-96 bg-gradient-to-r from-black/50 to-customBlue flex items-center justify-center">
        <img
          src="/images/Ts.png"
          alt="Luxe Locks Banner"
          className="w-full h-full object-scale-down"
        />
        {/* Gradient Overlay */}
      </div>

      {/* Centered Text Content */}
      <section
        className="w-full bg-cover bg-center py-16 md:py-24"
        style={{ backgroundImage: "url('/images/marble.jpg')" }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Image + Experience Badge */}
            <div className="relative w-full lg:w-1/2">
              <img
                src={Img}
                alt="Salon Founders"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 p-4 rounded-lg shadow text-center">
                <span className="text-3xl text-customBlue font-bold">19</span>
                <p className="text-sm text-gray-800 font-semibold">
                  Years of Experience
                </p>
              </div>
            </div>

            {/* Services Description */}
            <div className="w-full lg:w-1/2 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-customBlue mb-6">
                Our Services
              </h2>
              <p className="text-black font-bold mb-10 font-body">
                All of our services are made just for you. From hair color to
                advanced treatments, Twisted Sisters Salon is committed to
                modern techniques that enhance your natural beauty. We offer
                balayage, ombré, hair extensions, cuts, styles, and more.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Styles */}
                <div className="bg-customBlue p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">Styles</h3>
                  <ul className="space-y-1 text-black font-medium">
                    <li>Cut / Style</li>
                    <li>Men’s Cut</li>
                    <li>Children’s Cut</li>
                    <li>Blowdry</li>
                    <li>Special Style / Updos</li>
                  </ul>
                </div>

                {/* Technical */}
                <div className="bg-customBlue p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">Technical</h3>
                  <ul className="space-y-1 text-black font-medium">
                    <li>Color Gloss</li>
                    <li>Tints</li>
                    <li>Lighteners</li>
                    <li>Ombré</li>
                    <li>Highlights</li>
                    <li>Tint + Highlights</li>
                    <li>Balayage</li>
                    <li>Relaxers</li>
                    <li>Perms</li>
                    <li>Corrective Color</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery / Carousel Section */}
      <Product />
    </div>
  );
}
