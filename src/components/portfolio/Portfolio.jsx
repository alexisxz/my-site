import React from 'react'
import './portfolio.css'
import { data } from '../../data/portfolioData'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Web Development Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='__blank'>GitHub</a>
                                    <a href={demo} className='btn btn-primary' target='__blank'>Live</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio