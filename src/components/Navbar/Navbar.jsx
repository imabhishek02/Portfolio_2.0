import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
function Navbar() {
  return (
    <div className='n-wrapper'>
        <div className="n-left">
            <div className="n-name">Abhishek</div>
            
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <Link spy={true} to='Home' smooth={true} activeClass='activeClass'>
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='Projects' smooth={true} activeClass='activeClass'>
                    <li>Projects</li>
                    </Link>
                    
                    <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'>
                    <li>Experience</li>
                    </Link>
                    
                    <Link spy={true} to='About' smooth={true} activeClass='activeClass'>
                    <li>About</li>
                    </Link>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                    <li>Blogs</li>
                    </Link>
                    
                    
                </ul>
            </div>
            <button className='button n-button'>
                Contact
            </button>
        </div>
    </div>
  )
}

export default Navbar