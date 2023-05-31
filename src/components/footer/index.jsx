import React from 'react'
import './style.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

function Footer() {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Your Choice</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portofolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* <div className="footer__social">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div> */}

      <div className="footer__copyright">
        <small>&copy; All rights reserved.</small>
      </div>

    </footer>  
  )
}

export default Footer