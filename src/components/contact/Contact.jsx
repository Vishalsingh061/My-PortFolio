import React, {useRef} from 'react';
import './contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
  const myEmail = 'vishalpratap906@gmail.com';
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Get form values
    const name = form.current.name.value;
    const senderEmail = form.current.email.value;
    const message = form.current.message.value;
    
    // Create Gmail compose URL with form values
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`From: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`);
    
    // Open Gmail compose with filled values
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vishalpratap906@gmail.com</h5>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vishalpratap906@gmail.com" target='_blank' rel="noreferrer">Email Me</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91-7983566675</h5>
            <a href="https://api.whatsapp.com/send?phone=7983566675" target='_blank' rel="noreferrer">Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact