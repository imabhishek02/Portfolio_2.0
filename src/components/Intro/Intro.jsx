import React from "react";
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png'
const Intro = ()=>{
    return(
<div className="Intro">
     <div className="i-left">
<div className="i-name">
    <span>Hy! I am</span>
    <span>Abhishek Rohit</span>
    <span>
        Frontend Developer who is passionate
        about building elegant user-freindly
        websites and application. 
    </span>
</div>
<button className="i-button button">Hire me</button>
<div className="i-icons">
    <a href='https://github.com/imabhishek02'><img src={Github} alt="" /></a>
    <a href='https://www.linkedin.com/in/abhishekrohit/'><img src={LinkedIn} alt="" /></a>
    <a href='https://instagram.com/imabhishek020?utm_medium=copy_link'><img src={Instagram} alt="" /></a>
    
    
  </div>
</div>
    <div className="i-right">
         i am right side
    </div>
</div>
    )
}
export default Intro