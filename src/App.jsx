import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './temp/Navbar';
import Header from './temp/Header';
import About from './temp/About';
import Projects from './temp/Projects';
import Skills from './temp/Skills';
import Contact from './temp/Contact';
import Footer from './temp/Footer';
import NotFound from './temp/NotFound';
import AOS from 'aos';
import 'aos/dist/aos.css';





function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Navbar />
      <Header />
      <Routes>

        <Route path="/" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Section" element={<Section />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* <section id="about" data-aos="fade-up"><About /></section>
      <section id="projects" data-aos="fade-up"><Projects /></section>
      <section id="skills" data-aos="fade-up"><Skills /></section>
      <section id="contact" data-aos="fade-up"><Contact /></section> */}
      <Footer />
      <Routes/>

    </div>
  );
}

export default App;
