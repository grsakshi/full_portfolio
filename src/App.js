import React from 'react';

import Navbar from './components/Navbar/navbar.component';
import Hero from './components/Hero/hero.component';
import Footer from './components/Footer/footer.component';
import BlogSection from './components/Blog-Section/blogsection.component';
import Experience from './components/Experience/experience.component';
import ProjectSection from './components/Project-Section/projectsection.component';


function App() {
  return (
    <div className="text-center">
        <Navbar />
        <Hero />
        <ProjectSection />
        <Experience />
        <BlogSection />
        <Footer />
    </div>
  );
}

export default App;
