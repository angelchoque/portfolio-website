import React from 'react'
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
import "./About.css"
// import ME from "../../assets/me-about.jpg"
import ME from "../../assets/me.png"
const About = () => {
  return (
    <section id="about">
      <h5>Get to now</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <picture className="about__me-image">
            <img src={ME} alt="angel choque" />
          </picture>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum numquam deserunt architecto nihil suscipit iusto quaerat, atque deleniti quo amet aspernatur reprehenderit sint iste omnis nam dolore officiis soluta voluptas?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About