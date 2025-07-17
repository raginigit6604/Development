import React from 'react';

const Pages = () => {
  return (
    <section className="p-10 space-y-20 animate-fadeInUp">
      {/* Our Team */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-cyan-600">Our Team</h2>
        <p className="text-gray-600 max-w-xl mx-auto">Meet our experienced instructors and professionals dedicated to your success.</p>
      </div>

      {/* Testimonial */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-cyan-600">Testimonial</h2>
        <p className="text-gray-600 max-w-xl mx-auto italic">"eLEARNING has been a game-changer for my career. The instructors are knowledgeable, and the content is top-notch!"</p>
      </div>

      {/* 404 Page */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-red-500">404 - Page Not Found</h2>
        <p className="text-gray-600 max-w-xl mx-auto">Oops! The page you're looking for doesn't exist.</p>
        <button className="mt-6 bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600 transition">
          Go Back Home
        </button>
      </div>
    </section>
  );
};

export default Pages;
