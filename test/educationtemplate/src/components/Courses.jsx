// import React from 'react';

// const ImageCard = ({ title, image }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
//       <img src={image} alt={title} className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
//       </div>
//     </div>
//   );
// };

// export default ImageCard;
    import React from 'react';
    import './Courses.css';
    
    function Courses() {
      return (
        <section className="popular-courses">
          <h5>COURSES</h5>
          <h2>Popular Courses</h2>
          <div className="course-list">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="course-card">
                <h3>$149.00</h3>
                <h4>Web Design & Development Course for Beginners</h4>
                <p>John Doe | 1.49 Hrs | 30 Students</p>
                <button className="read-more">Read More</button>
                <button className="join-now">Join Now</button>
              </div>
            ))}
          </div>
        </section>
      );
    }
    
    export default Courses;
