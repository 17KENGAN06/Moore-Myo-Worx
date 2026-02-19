import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Service from './components/Service/Service';

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About/>
    <Contact/>
    <Service/>
  </>
  )
};

export default App;
