import React from 'react';
import { FaChalkboardTeacher, FaGlobe, FaHome, FaBook } from 'react-icons/fa';

const features = [
  { icon: <FaChalkboardTeacher size={40} className="text-cyan-500" />, title: "Skilled Instructors", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" },
  { icon: <FaGlobe size={40} className="text-cyan-500" />, title: "Online Classes", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" },
  { icon: <FaHome size={40} className="text-cyan-500" />, title: "Home Projects", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" },
  { icon: <FaBook size={40} className="text-cyan-500" />, title: "Book Library", description: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam" }
];

const FeaturesAndAbout = () => {
  return (
    <section className="p-10 space-y-20 animate-fadeInUp">
      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div key={index} className="bg-cyan-50 p-6 text-center rounded shadow hover:shadow-md transition duration-300">
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesAndAbout;
