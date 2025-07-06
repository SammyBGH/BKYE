 
import React from 'react'
import '../styles/Footer.css'
import mailImg from '../assets/images/—Pngtree—email.png';
import githubImg from '../assets/images/icons8-github.png';
import linkdInImg from '../assets/images/—Pngtree—linkedin.png';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Samuel Boakye. All rights reserved.</p>
      <div className="footer-links">
        <a href="mailto:sammyboakye295@gmail.com"><img src={mailImg} alt="mail-image" className='socials-img' /></a>
        <a href="https://github.com/SammyBGH" target="_blank"><img src={githubImg} alt="github-image" className='socials-img' /></a>
        <a href="https://www.linkedin.com/in/samuel-boakye-494084263" target="_blank"><img src={linkdInImg} alt="linkdin-image" className='socials-img' /></a>
      </div>
    </footer>
  )
}

export default Footer
