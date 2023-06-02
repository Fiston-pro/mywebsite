import React, {useRef} from 'react'
import emailjs from 'emailjs-com';
import './style.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_o8aie4u', 'template_zjj6drg', form.current, 'rWiNIIvg4LVTPaXxo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option flex flex-col justify-center items-center ">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>byiringiroetienne2@gmail.com</h5>
            <a href="mailto:byiringiroetienne2@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option flex flex-col justify-center items-center  ">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+48514618708</h5>
            <a href="https://api.whatsapp.com/send?phone+48514618708" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}
export default Contact