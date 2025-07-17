
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';


const AboutSection = () => {
  return (
    <section className="px-6 md:px-16 py-10 bg-white animate-fadeInUp">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <img
           src="/img/img4.jpg"
          alt="About eLearning"
          className="rounded-lg shadow-lg"
        />

        <div>
          <p className="text-cyan-600 font-semibold text-lg mb-2 flex items-center gap-2">
            ABOUT US <span className="border-t-2 border-cyan-500 w-12 ml-2 mt-1" />
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Welcome to eLEARNING</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
            Clita erat ipsum et lorem et sit.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
          </p>

          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              "Skilled Instructors",
              "Online Classes",
              "International Certificate",
              "Skilled Instructors",
              "Online Classes",
              "International Certificate"
            ].map((item, index) => (
              <div key={index} className="flex items-center text-gray-700 text-lg">
                <FaArrowRight className="text-cyan-500 mr-2" />
                {item}
              </div>
            ))}
          </div> 
          <button className="mt-4 bg-cyan-500 text-white px-8 py-3 text-lg rounded hover:bg-cyan-600 transition duration-300">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
