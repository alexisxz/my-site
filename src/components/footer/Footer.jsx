/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'

import { FiInstagram } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Alexis Matos da Silva</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.instagram.com/alexismatos_/" target="_blank" rel="noreferrer"><FiInstagram /></a>
                <a href="https://www.linkedin.com/in/alexis-matos/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                <a href="https://github.com/alexisxz" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://www.figma.com/@alexis28" target="_blank" rel="noreferrer"><FiFigma /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Alexis Matos da Silva. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer