import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { backendData, frontendData, othersData } from '../../data/expierenceData'

const Experience = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have For Fullstack Development</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">

                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        {frontendData.map(data => (
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>{data.skill}</h4>
                                    <small className='text-light'>{data.level}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
                {/* END OF FRONTEND */}

                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        {backendData.map(data => (
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>{data.skill}</h4>
                                    <small className='text-light'>{data.level}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
                {/* END OF BACKEND */}

                <div className="experience__backend">
                    <h3>More</h3>
                    <div className="experience__content">
                        {othersData.map(data => (
                            <article className='experience__details'>
                                <BsPatchCheckFill className='experience__details-icon' />
                                <div>
                                    <h4>{data.skill}</h4>
                                    <small className='text-light'>{data.level}</small>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
                {/* END OF OTHERS */}
            </div>
        </section>
    )
}

export default Experience