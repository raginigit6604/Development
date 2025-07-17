import React, { useState } from "react";

const testimonials = [
  {
    name: "Client Name",
    profession: "Profession",
    image: "/img/img4.jpg",
    message:
      "Tempor erat elitr reb um at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    name: "Client Name",
    profession: "Profession",
    image: "/img/img5.jpg",
    message:
      "Tempor erat elitr reb um at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    name: "Client Name",
    profession: "Profession",
    image: "/img/img7.jpg",
    message:
      "Tempor erat elitr reb um at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="py-12 bg-white text-center">
      <h3 className="text-sm font-semibold text-cyan-600 tracking-widest uppercase mb-2">
        Testimonial
      </h3>
      <h2 className="text-3xl font-bold text-gray-800 mb-10">
        Our Students Say!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`p-6 rounded-md transition-all duration-300 ${
              index === activeIndex
                ? "bg-cyan-500 text-white shadow-lg"
                : "bg-cyan-50 text-gray-700"
            }`}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-white shadow"
            />
            <h4 className="text-lg font-semibold">{testimonial.name}</h4>
            <p className="text-sm mb-4">{testimonial.profession}</p>
            <p className="text-sm leading-relaxed">{testimonial.message}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-cyan-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
