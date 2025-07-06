import React from 'react'
import '../styles/Certificates.css'
import cert1 from '../assets/images/cert1.jpg' /* okay*/
import cert2 from '../assets/images/cert2.jpeg'
import cert3 from '../assets/images/cert3.jpg'

const certificates = [
  {
    title: 'Full Stack Developer',
    issuer: 'Coursera / Meta',
    date: 'Jan 2024',
    image: cert1,
  },
  {
    title: 'Machine Learning',
    issuer: 'Stanford / Andrew Ng',
    date: 'Sep 2023',
    image: cert2,
  },
  {
    title: 'Web Design',
    issuer: 'FreeCodeCamp',
    date: 'May 2023',
    image: cert3,
  },
]

const Certificates = () => {
  return (
    <section className="certificates" id="certificates" >
      <h2>My Certificates</h2>
      <div className="cert-grid">
        {certificates.map((cert, index) => (
          <div className="cert-card" key={index} data-aos="zoom-in">
            <div className="cert-card-inner">
              <div className="cert-front">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="cert-back">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <p>{cert.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certificates
