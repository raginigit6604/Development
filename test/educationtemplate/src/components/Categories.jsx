import React from "react";

const categories = [
  {
    title: "Web Design",
    image: "/img/img4.jpg",
    courses: 49,
  },
  {
    title: "Graphic Design",
    image: "/img/img5.jpg",
    courses: 49,
  },
  {
    title: "Video Editing",
    image: "/img/img6.jpg",
    courses: 49,
  },
  {
    title: "Online Marketing",
    image: "/img/img7.jpg",
    courses: 49,
  },
];

const Categories = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h3 className="text-sm font-semibold text-cyan-600 tracking-widest uppercase mb-2">
        Categories
      </h3>
      <h2 className="text-3xl font-bold text-gray-800 mb-10">
        Courses Categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 max-w-6xl mx-auto">
        {/* Web Design */}
        <div className="md:row-span-2 relative">
          <img
            src={categories[0].image}
            alt={categories[0].title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-4 right-4 bg-white bg-opacity-80 px-4 py-2 rounded shadow-md text-right">
            <h4 className="text-md font-semibold text-gray-800">{categories[0].title}</h4>
            <p className="text-sm text-cyan-600">{categories[0].courses} Courses</p>
          </div>
        </div>

        {/* Graphic Design */}
        <div className="relative">
          <img
            src={categories[1].image}
            alt={categories[1].title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-4 py-2 rounded shadow-md text-left">
            <h4 className="text-md font-semibold text-gray-800">{categories[1].title}</h4>
            <p className="text-sm text-cyan-600">{categories[1].courses} Courses</p>
          </div>
        </div>

        {/* Online Marketing */}
        <div className="relative md:row-span-2">
          <img
            src={categories[3].image}
            alt={categories[3].title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-4 right-4 bg-white bg-opacity-80 px-4 py-2 rounded shadow-md text-right">
            <h4 className="text-md font-semibold text-gray-800">{categories[3].title}</h4>
            <p className="text-sm text-cyan-600">{categories[3].courses} Courses</p>
          </div>
        </div>

        {/* Video Editing */}
        <div className="relative">
          <img
            src={categories[2].image}
            alt={categories[2].title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-4 py-2 rounded shadow-md text-left">
            <h4 className="text-md font-semibold text-gray-800">{categories[2].title}</h4>
            <p className="text-sm text-cyan-600">{categories[2].courses} Courses</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;