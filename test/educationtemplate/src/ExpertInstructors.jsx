import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const instructors = [
  {
    name: "Instructor Name",
    designation: "Designation",
    image: "/img/img4.jpg",
  },
  {
    name: "Instructor Name",
    designation: "Designation",
    image: "/img/img5.jpg",
  },
  {
    name: "Instructor Name",
    designation: "Designation",
    image: "/img/img6.jpg",
  },
  {
    name: "Instructor Name",
    designation: "Designation",
    image: "/img/img7.jpg",
  },
];

const ExpertInstructors = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h3 className="text-sm font-semibold text-cyan-600 tracking-widest uppercase mb-2">
        Instructors
      </h3>
      <h2 className="text-3xl font-bold text-gray-800 mb-10">
        Expert Instructors
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
        {instructors.map((instructor, index) => (
          <div key={index} className="bg-cyan-50 rounded-lg overflow-hidden shadow-md">
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-center space-x-4 mb-4">
                <a href="#" className="text-white bg-cyan-600 p-2 rounded-full hover:bg-cyan-700">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-white bg-cyan-600 p-2 rounded-full hover:bg-cyan-700">
                  <FaTwitter />
                </a>
                <a href="#" className="text-white bg-cyan-600 p-2 rounded-full hover:bg-cyan-700">
                  <FaInstagram />
                </a>
              </div>
              <h4 className="text-lg font-semibold text-gray-800">{instructor.name}</h4>
              <p className="text-sm text-gray-600">{instructor.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertInstructors;