/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FaIndustry } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>9+ Experience in many areas</small>
                        </article>

                        <article className='about__card'>
                            <FaIndustry className='about__icon' />
                            <h5>Companies</h5>
                            <small>Benteler | Bosch | Gorillas Tech | Stirner</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Services</h5>
                            <small>APP | Web | Desktop | Bots</small>
                        </article>
                    </div>

                    <p>
                        Experiences with companies as Bosch, Benteler Automotive, Gorillas Tech. and Stirner GmbH on areas of web development, WH logistic, purchasing, quality, marketing, business and sales, and supply chain (full-stack) with OE, OES and IAM products such as: Engines, breaks, gasoline systems, diesel system, packages and chassis; Warehouse with grocery shop; and currently working with web development wit webflow for websites and react for apps.Proactive, honored and focused with my tasks, looking for success, qualification, knowledge and strategies in the market; Creating autonomous process and looking solution for any problem.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's talk</a>
                </div>
            </div>
        </section>
    )
}

export default About

