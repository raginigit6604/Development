import React from 'react';
import img6 from '../assets/img6.jpg'; 

const HeroSection = () => {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-center text-white animate-fadeIn"
      style={{ backgroundImage: `url(${img6})` }}
    >
      <div className="bg-black/50 absolute inset-0" />
      <div className="relative z-10 text-center max-w-2xl px-4">
        <p className="text-cyan-300 uppercase font-semibold mb-2">Best Online Courses</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          The Best Online<br />Learning Platform
        </h1>
        <p className="text-lg mb-6">
          Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
          Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elit.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600 transition">
            Read More
          </button>
          <button className="bg-white text-gray-800 px-6 py-2 rounded hover:bg-gray-200 transition">
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;