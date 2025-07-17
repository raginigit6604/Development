import React from 'react';
import { FaUser, FaClock, FaUsers } from 'react-icons/fa';
import course1 from '../assets/img1.jpg';
import course2 from '../assets/img2.jpg';
import course3 from '../assets/img3.jpg';

const courses = [
  { img: course1, title: 'Web Design & Development Course for Beginners', price: '$149.00', rating: 5 },
  { img: course2, title: 'Web Design & Development Course for Beginners', price: '$149.00', rating: 5 },
  { img: course3, title: 'Web Design & Development Course for Beginners', price: '$149.00', rating: 5 },
];

const PopularCourses = () => {
  return (
    <section className="px-10 py-20">
      <div className="text-center mb-12">
        <h3 className="text-cyan-600 font-semibold text-lg mb-1">COURSES</h3>
        <h2 className="text-4xl font-bold text-gray-800">Popular Courses</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <div key={idx} className="border rounded shadow overflow-hidden">
            <div className="relative">
              <img src={course.img} alt={course.title} className="w-full h-56 object-cover" />
              <div className="absolute bottom-4 left-4 flex gap-2">
                <button className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm">Read More</button>
                <button className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm">Join Now</button>
              </div>
            </div>
            <div className="bg-cyan-50 p-6">
              <p className="text-xl font-bold text-center">{course.price}</p>
              <p className="text-cyan-600 text-center mb-2">★★★★★ (123)</p>
              <h3 className="text-center font-semibold text-gray-800 mb-4">{course.title}</h3>
              <div className="flex justify-between text-sm text-gray-600">
                <p className="flex items-center gap-1"><FaUser /> John Doe</p>
                <p className="flex items-center gap-1"><FaClock /> 1.49 Hrs</p>
                <p className="flex items-center gap-1"><FaUsers /> 30 Students</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;