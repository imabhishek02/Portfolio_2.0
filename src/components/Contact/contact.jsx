import React, { useState } from 'react'
import './contact.css';
import emailjs from '@emailjs/browser';

import {useRef} from "react";
const Contact = () => {
    const form = useRef();
   const[done,setDone]=useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wp27xel', 'template_ibbhzl8', form.current, 'JHQ78rP9megikfcDv')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact-form">
        <div className="w-left">
            <span>Get in touch</span>
            <span>Contact me</span>

            <div 
            className='blur s-blur1' style={{background: "#ABF1FF94"}}
            ></div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="text" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message'/>
                <input type="submit" value="Send" className='button'/>
                <span>{done && "Thanks for Contactin me!"}</span>
            <div
            className='blur c-blur1'
            style={{background:"var(--purple)"}}
            ></div>
            </form>
        </div>
    </div>
  )
}

export default Contact