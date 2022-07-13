import React,{ useRef } from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { ImWhatsapp } from 'react-icons/im'
import { FaTelegramPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_00mnd8e', 'template_qw2yk0v', form.current, 'WNJ3vSyfPhWXe25RP')
      
      e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Conract Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <artical className="contact__opt">
            <MdEmail className='contact__icon'/>
            <h4>Email</h4>
            <h5>shiwangiyadav001@gmail.com</h5>
            <a href="mailto:shiwangiyadav001@gmail.com" target='_blank'>Send a mail</a>
          </artical>

          <artical className="contact__opt">
            <ImWhatsapp className='contact__icon'/>
            <h4>Whatsapp</h4>
            <a href="https://wa.me/917972754703" target='_blank'>Send a message</a>
          </artical>

          <artical className="contact__opt">
            <FaTelegramPlane className='contact__icon'/>
            <h4>Telegram</h4>
            <a href="https://t.me/shivu_y" target='_blank'>Send a message</a>
          </artical>
        </div>
        {/* end of contacts */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>        
          <button type='submit'className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

