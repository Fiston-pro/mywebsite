import React from 'react'
import './style.css'
import ME from '../../assets/meseum.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Fiston"/>
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card flex flex-col justify-center items-center ">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>
            <article className="about__card flex flex-col justify-center items-center">
              <FiUsers className='about__icon'/>
              <h5>Coding hours</h5>
              <small>3500+ hours</small>
            </article>
            <article className="about__card flex flex-col justify-center items-center">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>

          <p>
          Hi, I'm a Software Engineer with 2 years of experience. I specialize in Typescript, Python,… and have a track record of delivering high-quality software solutions. I focus on clean code, scalability, and user-centric design to solve complex problems and enhance user experiences. Let's discuss how I can join your team and drive to success. Explore my portfolio for more details.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default About