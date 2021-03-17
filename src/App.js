import React from 'react';

import './App.css';

import Navbar from './components/Navbar/navbar.component';
import Hero from './components/Hero/hero.component';
import Footer from './components/Footer/footer.component';
import BlogSection from './components/Blog-Section/blogsection.component';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <BlogSection />
        <Footer />
    </div>
  );
}

export default App;
