import React from 'react';
import Header from './components/header/header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Cure from './components/Cure/Cure';
import Stories from './components/Stories/Stories';
import Reviews from './components/Reviews/Reviews';
import Meet from './components/Meet/Meet';
import Team from './components/Team/Team';


const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Contact />
      <Services />
      <Cure/>
      <Stories/>
      <Reviews/>
      <Meet/>
      <Team/>
    </>
  );
};

export default App;
