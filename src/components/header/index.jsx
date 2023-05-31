import React from 'react'
import './style.css'
import CTA from './cta'
import HeaderSocials from './headersocials'
import ME from '../../assets/me_.png'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Fiston Etienne</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA/>
          <HeaderSocials/>
          <div className="me">
            <img src={ME} alt="Fiston" />
          </div>
          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header