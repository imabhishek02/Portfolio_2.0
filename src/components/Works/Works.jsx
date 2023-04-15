import React from 'react'
import './Works.css'
import js from "../../img/js.png"
import java from "../../img/java.png"
import react from "../../img/react.png"
import cpp from "../../img/cpp.png"
import mysql from "../../img/mysql.png"

const Works = () => {
  return (
    <div className="works">
    <div className="awesome">
<span> Languages & Skills</span>
<span> I have Worked on...</span>
<spane>
 I have a strong foundation in programming with expertise in C, C++, and Java. I am 
 <br/>
 proficient in developing modern web applications using the ReactJs framework.
 <br/>
 Additionally, I am experienced in working with MySQL, one of the most widely
 <br/>
   used relational databases. My understanding of object-oriented programming 
 <br/>
   concepts allows me to write modular, maintainable, and reusable code.
</spane>

<button className='button s-button'>Hire me</button>


<div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
 </div>
 
 {/*right side*/}

<div className="w-right">
    <div className="w-mainCircle">
        <div className="w-secCircle">
         <img src={java} alt=""/>
         </div>
         <div className="w-secCircle">
         <img src={cpp} alt="" />
         </div>
        
         <div className="w-secCircle">
         <img src={react} alt="" />
         </div>
         
         <div className="w-secCircle">
         <img src={js} alt="" />
         </div>
         
         <div className="w-secCircle">
         <img src={mysql} alt="" />
         </div>
         
        
        </div>
        {/*background circle*/}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
    </div>
</div>
  );
};

export default Works