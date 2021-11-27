import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Howitwork from './Howitwork';
import AboutUsSection from './AboutUsSection';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
  <>
      <Navbar />
      <Header />
      <Howitwork />
      <AboutUsSection />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default Home;

