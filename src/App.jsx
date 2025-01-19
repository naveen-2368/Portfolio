import { useEffect } from 'react';

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from "./components/About";
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
     useEffect(() => {
       // Select all elements with the class "fade-in"
       const fadeElements = document.querySelectorAll(".fade-in");

       const observer = new IntersectionObserver(
         (entries) => {
           entries.forEach((entry) => {
             if (entry.isIntersecting) {
               // Add the 'fade-in-show' class when the element is in view
               entry.target.classList.add("fade-in-show");
             } else {
               // Optionally remove the class when the element is out of view
               entry.target.classList.remove("fade-in-show");
             }
           });
         },
         { threshold: 0.1 } // Trigger when 10% of the element is visible
       );

       fadeElements.forEach((el) => observer.observe(el));

       // Cleanup the observer on component unmount
       return () => observer.disconnect();
     }, []);
  return (
    <div className=''>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
