 
import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Samuel Boakye. All rights reserved.</p>
      <div className="footer-links">
        <a href="mailto:youremail@example.com">Email</a>
        <a href="https://github.com/yourusername" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/yourname" target="_blank">LinkedIn</a>
      </div>
    </footer>
  )
}

export default Footer
