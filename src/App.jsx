import React, { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './styles/App.css'
import './styles/variables.css';

function App() {
  useEffect(() => {
    const prefersDark = localStorage.getItem('theme') === 'dark'
    document.body.classList.toggle('dark', prefersDark)
  }, [])

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
