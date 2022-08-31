import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o25q13y', 'template_kkauxbc', form.current, 'YAh56fe4Xl_688uFS')
            .then((result) => {
                e.target.reset()
                alert('Sent');
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>alexisxzinho@hotmail.com</h5>
                        <a href="mailto:alexisxzinho@hotmail.com">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+4915209907551</h5>
                        <a href="https://wa.me/+4915209907551" target="__blank">Send a message</a>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
                    <button type="submit" className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact