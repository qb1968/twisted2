import BGImg1 from "/images/about-bg.png";
import Img from "/images/sam-and-sissy_orig.png";
import Product from "../components/Product";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center text-center bg-white">
      <Header />

      {/* Hero / Intro Section */}
      <section
        className="w-full bg-cover bg-center py-20 md:py-28"
        style={{ backgroundImage: "url('/images/marble.jpg')" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Image and Badge */}
            <div className="relative w-full lg:w-1/2">
              <img
                src={Img}
                alt="Salon Founders"
                className="rounded-xl shadow-xl w-full object-cover"
              />
              <div className="absolute -bottom-6 left-6 bg-white/95 px-6 py-4 rounded-xl shadow-lg border border-gray-200">
                <span className="text-4xl font-extrabold text-customBlue">
                  19
                </span>
                <p className="text-sm font-semibold text-gray-700">
                  Years of Experience
                </p>
              </div>
            </div>

            {/* Services Info */}
            <div className="w-full lg:w-1/2 text-left">
              <h2 className="text-4xl font-bold text-customBlue mb-6">
                Our Services
              </h2>
              <p className="text-lg text-gray-800 mb-10 leading-relaxed">
                All of our services are designed to bring out your best. From
                rich color work to detailed cuts and treatments, Twisted Sisters
                Salon specializes in contemporary styling to enhance your
                natural beauty.
              </p>

              {/* Service Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Styles */}
                <div className="bg-indigo-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-customBlue mb-3">
                    Styles
                  </h3>
                  <ul className="space-y-1 text-gray-800">
                    <li>Cut / Style</li>
                    <li>Men’s Cut</li>
                    <li>Children’s Cut</li>
                    <li>Blowdry</li>
                    <li>Special Style / Updos</li>
                  </ul>
                </div>

                {/* Technical */}
                <div className="bg-indigo-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-customBlue mb-3">
                    Technical
                  </h3>
                  <ul className="space-y-1 text-gray-800">
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

      {/* Product / Carousel Section */}
      <section className="w-full px-6 py-16 bg-gray-50">
        <Product />
      </section>
    </div>
  );
}
