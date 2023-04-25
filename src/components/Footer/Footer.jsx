import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:'100%'}} />
        <div className="f-content">
            <span>abhishekrohit369@gmail.com</span>
            <div className="f-icons">
                 <a href="https://instagram.com/imabhishek020?igshid=Yjk4NWM2ZWVkMw=="><Insta color='white' size='3rem'/></a> 
                 <a href="https://www.linkedin.com/in/abhishekrohit/"><Linkedin color='white' size='3rem'/></a> 
                 <a href="https://www.facebook.com/imabhishek02?mibextid=ZbWKwL"><Facebook color='white' size='3rem'/></a> 
            </div>
        </div>
    </div>
  )
}

export default Footer