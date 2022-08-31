import React from 'react'
import './testimonials.css'
import { data } from '../../data/testimonialsData'
import { AiOutlineLink } from 'react-icons/ai'

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
    return (
        <section id='testimonials'>
            <h5>Review and news from clients and companies</h5>
            <h2>Testimonials | News</h2>

            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}>
                {
                    data.map(({ avatar, name, review, link }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt="Avatar One" />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                                <a href={link} target='_blank' rel="noreferrer"><AiOutlineLink /> Link</a>

                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section >
    )
}

export default Testimonial