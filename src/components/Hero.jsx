  
import React from 'react'
import '../styles/Hero.css'
import profileImg from '../assets/images/profile.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home" data-aos="fade-in">
      <div className="hero-text">
        <h2>Hi, I'm Samuel</h2>
        <p>I build clean, responsive, and interactive web apps.</p>
        <a href="#projects" className="btn">View Projects</a>
      </div>
      <img src={profileImg} alt="Profile" className="hero-img" />
    </section>
  )
}

export default Hero
