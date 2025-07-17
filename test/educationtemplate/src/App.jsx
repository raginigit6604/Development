
import React from 'react';
import Header from './components/header';
import HeroSection from './components/HeroSection';
// import Pages from './components/pages';
import Features from './components/Features';
import './index.css'
import AboutSection from './components/AboutSection';
import PopularCourses from './components/PopularCouses';
import Categories from './components/categories';
import Footer from './components/footer';
import Testimonials from './components/Testimonial';
import ExpertInstructors from './ExpertInstructors';
function App() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <HeroSection />
      {/* <Pages/> */}
      <Features/>
      <AboutSection/>
      <PopularCourses/>
      <Categories/>
      <ExpertInstructors/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;


