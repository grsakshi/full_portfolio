import React from 'react';

import Navbar from './components/Navbar/navbar.component';
import Hero from './components/Hero/hero.component';
import Footer from './components/Footer/footer.component';
import G3BlogSection from './components/G3Blog-Section/g3blogsection.component';
import Experience from './components/Experience/experience.component';
import ProjectSection from './components/Project-Section/projectsection.component';


function App() {
  return (
    <div className="text-center">
        <Navbar />
        <Hero />
        <ProjectSection />
        <Experience />
        <G3BlogSection />
        <Footer />
    </div>
  );
}

export default App;
