import React, { useEffect, useState } from 'react'
import '../styles/ScrollToTop.css'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    visible && (
      <div className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </div>
    )
  )
}

export default ScrollToTop
