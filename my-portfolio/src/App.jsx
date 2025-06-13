import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
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
        <Route path="/Section" element={<section />} />
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
