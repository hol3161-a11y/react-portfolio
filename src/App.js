import './App.css';
import 'pretendard/dist/web/static/pretendard.css';
import './Portfolio.scss'
import Header from './comp/Header';
import Hero from './comp/Hero';
import About from './comp/About';
import Project from './comp/Project';
import Contact from './comp/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutDetail from './comp/AboutDetail';
import { useEffect, useState } from 'react';

function App() {
    useEffect(() => {
      const show = document.querySelectorAll('section');
      let observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry, i) {
          if (entries[i].isIntersecting) {
            entries[i].target.classList.add('show');
          }
        })
  
      }, { threshold: 0.2 });
  
      show.forEach(function (target, i) {
        observer.observe(show[i]);
      });
    }, [])

  return (
    <BrowserRouter>

        <Routes>
          <Route path='/' element={
            <div className='bg'>
              
              <Header />
              <Hero />
              <About />
              <Project />
              <Contact />
            </div>
          } />

          <Route path='/about' element={<AboutDetail />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;