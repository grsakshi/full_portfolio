import React from 'react';

import Navbar from './components/Navbar/navbar.component';
import Hero from './components/Hero/hero.component';
import Footer from './components/Footer/footer.component';

import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Footer />
    </div>
  );
}

export default App;
