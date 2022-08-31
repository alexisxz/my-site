import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/alexis-matos/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/alexisxz" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.figma.com/@alexis28" target="_blank" rel="noreferrer"><FiFigma /></a>
        </div>
    )
}

export default HeaderSocials